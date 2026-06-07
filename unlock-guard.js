/* ════════════════════════════════════════════════════════════
   TAKUMI — 跨頁解鎖保護機制 (client-side, sessionStorage)
   ------------------------------------------------------------
   ⚠ 安全聲明：純靜態網站的前端保護，僅能阻擋一般使用者。
     懂技術者可透過開發者工具繞過。如需真正的存取控制，
     必須改為後端驗證。此機制與既有 Alpine 閘門等級相同。

   提供的能力：
   1. window.TakumiUnlock — 解鎖狀態 API（供首頁 Alpine 閘門整合）
   2. 導覽選單：未解鎖的 case 項目自動隱藏（依 href 比對，限 nav 內）
   3. 頁面守衛：直接開啟受保護頁面時，跳出全頁密碼閘門
   ════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  // ── 設定：每個受保護案例的密碼與對應頁面 ──
  var CONFIG = {
    case01: { pwd: "takumi-clinic", page: "selected_works.html", title: "醫療後台平台重設計", note: "此案例包含受 NDA 保護的醫療系統設計細節。" },
    case02: { pwd: "takumi-estate", page: "brand_identity_1.html", title: "高端房仲招募平台",   note: "此案例包含客戶機密的品牌與前台設計細節。" }
  };

  var key = function (id) { return "takumi:unlocked:" + id; };
  var isUnlocked = function (id) {
    try { return sessionStorage.getItem(key(id)) === "1"; } catch (e) { return false; }
  };
  var unlock = function (id) {
    try { sessionStorage.setItem(key(id), "1"); } catch (e) {}
  };
  var tryPwd = function (id, input) {
    if (!CONFIG[id]) return false;
    if (String(input || "").trim().toLowerCase() === CONFIG[id].pwd) { unlock(id); return true; }
    return false;
  };

  // 依目前網址判斷此頁是否為某個受保護案例
  var currentCaseId = function () {
    var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    for (var id in CONFIG) {
      if (CONFIG.hasOwnProperty(id) && CONFIG[id].page.toLowerCase() === path) return id;
    }
    return null;
  };

  // ── 1) 導覽選單：未解鎖的 case 連結隱藏（只動 <nav> 內，footer 不受影響） ──
  function syncNav() {
    var navs = document.querySelectorAll("nav");
    navs.forEach(function (nav) {
      for (var id in CONFIG) {
        if (!CONFIG.hasOwnProperty(id)) continue;
        var hide = !isUnlocked(id);
        var links = nav.querySelectorAll('a[href="' + CONFIG[id].page + '"]');
        links.forEach(function (a) {
          a.style.display = hide ? "none" : "";
          // 同時隱藏緊接其後的分隔線（dropdown 內 .h-px）
          var sib = a.nextElementSibling;
          if (sib && /(^|\s)h-px(\s|$)/.test(sib.className)) {
            sib.style.display = hide ? "none" : "";
          }
        });
      }
    });
  }

  // ── 2) 頁面守衛：受保護頁面未解鎖時，覆蓋全頁密碼閘門 ──
  function guardPage() {
    var id = currentCaseId();
    if (!id) return;            // 非受保護頁面
    if (isUnlocked(id)) return; // 已解鎖，放行

    var cfg = CONFIG[id];
    document.documentElement.style.overflow = "hidden";

    var gate = document.createElement("div");
    gate.id = "takumi-page-gate";
    gate.setAttribute("style", [
      "position:fixed", "inset:0", "z-index:99999",
      "display:flex", "align-items:center", "justify-content:center",
      "padding:24px",
      "background:rgba(244,244,242,0.96)",
      "backdrop-filter:blur(24px)", "-webkit-backdrop-filter:blur(24px)"
    ].join(";"));

    gate.innerHTML =
      '<div style="width:100%;max-width:380px;text-align:center">' +
        '<div style="width:56px;height:56px;border-radius:16px;background:#f8faf8;border:1px solid #E8E8E5;display:flex;align-items:center;justify-content:center;margin:0 auto 24px">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444843" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' +
        '</div>' +
        '<p style="font-family:\'Hanken Grotesk\',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#79573f;margin:0 0 8px">Private Work</p>' +
        '<h2 style="font-family:\'Libre Caslon Text\',serif;font-size:26px;color:#182319;margin:0 0 12px">' + cfg.title + '</h2>' +
        '<p style="font-family:\'Hanken Grotesk\',sans-serif;font-size:14px;line-height:1.6;color:#444843;margin:0 0 24px">' + cfg.note + '<br/>請輸入密碼以閱覽完整內容。</p>' +
        '<form id="takumi-gate-form" style="display:flex;flex-direction:column;gap:12px">' +
          '<div id="takumi-gate-shake">' +
            '<input id="takumi-gate-input" type="password" placeholder="Enter password" autocomplete="off" ' +
              'style="width:100%;box-sizing:border-box;background:#f8faf8;border:1px solid #E8E8E5;border-radius:4px;padding:12px 16px;font-family:\'Hanken Grotesk\',sans-serif;font-size:14px;color:#191c1b;outline:none"/>' +
            '<p id="takumi-gate-error" style="display:none;font-family:\'Hanken Grotesk\',sans-serif;font-size:12px;color:#ba1a1a;margin:6px 0 0;text-align:left">密碼錯誤，請再試一次。</p>' +
          '</div>' +
          '<button type="submit" style="width:100%;background:#182319;color:#fff;border:none;border-radius:4px;padding:12px;font-family:\'Hanken Grotesk\',sans-serif;font-size:14px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer">解鎖案例 Unlock</button>' +
        '</form>' +
        '<p style="font-family:\'Hanken Grotesk\',sans-serif;font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:rgba(68,72,67,0.5);margin:20px 0 0">如需檢視完整案例，請來信向設計師索取密碼</p>' +
        '<a href="index.html" style="display:inline-block;margin-top:16px;font-family:\'Hanken Grotesk\',sans-serif;font-size:12px;color:#79573f;text-decoration:none">← 返回首頁</a>' +
      '</div>';

    document.body.appendChild(gate);

    var input = gate.querySelector("#takumi-gate-input");
    var form  = gate.querySelector("#takumi-gate-form");
    var err   = gate.querySelector("#takumi-gate-error");
    var shake = gate.querySelector("#takumi-gate-shake");
    input.focus();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (tryPwd(id, input.value)) {
        document.documentElement.style.overflow = "";
        gate.parentNode.removeChild(gate);
        syncNav();
      } else {
        err.style.display = "block";
        input.value = "";
        input.focus();
        shake.style.animation = "takumi-wiggle 0.5s ease";
        setTimeout(function () { shake.style.animation = ""; }, 600);
      }
    });
  }

  // 注入晃動動畫的 keyframes（避免依賴各頁 CSS）
  function injectKeyframes() {
    if (document.getElementById("takumi-wiggle-style")) return;
    var s = document.createElement("style");
    s.id = "takumi-wiggle-style";
    s.textContent = "@keyframes takumi-wiggle{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}";
    document.head.appendChild(s);
  }

  // ── 對外 API（供首頁 Alpine 閘門整合） ──
  window.TakumiUnlock = {
    CONFIG: CONFIG,
    isUnlocked: isUnlocked,
    unlock: unlock,
    try: tryPwd,
    syncNav: syncNav
  };

  function init() { injectKeyframes(); guardPage(); syncNav(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

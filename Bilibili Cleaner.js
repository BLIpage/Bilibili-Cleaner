// ==UserScript==
// @name         Bilibili Cleaner
// @namespace    https://github.com/BLIpage/Bilibili-Cleaner
// @version      1.12.1
// @description  移除Bilibili的干扰元素，防止无止境刷视频
// @author       Czydsll
// @match        *://*.bilibili.com/*
// @match        *://live.bilibili.com/*
// @grant        none
// @run-at       document-end
// @license      MIT 
// ==/UserScript==

(function() {
    'use strict';

    const selectors = [
        '.adblock-tips'，
        '.primary-btn.roll-btn'，
        '.rec-list'，
        '.next-play'，
        '.bili-feed4-layout'，
        '.bpx-player-ending'，
        '.bili-header__channel'，
        '.header-channel-fixed'，
        '.entry-title'，
        '.default-entry'，
        '.download-entry.download-client-trigger'，
        '.header-banner__inner'，
        '.primary-btn.top-btn.visible'，
        '.primary-btn.three-dots'，
        '.flexible-roll-btn-inner'，
        '.watchlater-pip-button-inner.expand-btn'，
        '.histories-wrap'，
        '.search-panel'，
        '.bili-dyn-up-list__window'，
        '.right'，
        '.video-tag-container'，
        '.video-card-ad-small'，
        '.ad-report'，
        '.ad-floor-exp'，
        '.right-bottom-banner'，
        '.flex-block'，
        '.shortcuts-ctnr.h-100.f-left'，
        '.side-bar-cntr'，
        '.gift-control-panel.f-clear.b-box.p-relative'，
        '.top3-cntr'，
        '.pilot'，
        '.tab-list.dp-flex'，
        '.right-ctnr'，
        '.card-list'，
        '.card'，
        '.right-container'，
        '.prehold-nav-ctnr'，
        '#background-manage-vm'，
        '.background-changer.z-background-manage'，
        '.tab-content.ts-dot-2.tab-content-pilot'，
        '#gift-control-vm'，
        '.gift-control-section.p-relative.border-box.z-gift-control-section.bg-bright-filter'，
        '.flip-view-image.dp-i-block.v-top.w-100.h-100.ts-dot-4'，
        '.bottom.p-rel.w-100.t-center.fs-14'，
        '.new-tabs.dp-i-block.list-none.none-select'，
        '.link-footer'，
        '.p-relative.dp-i-block.v-top.w-100.h-100'，
        '.flip-view-image-ctnr.img-bright-filter.ts-dot-4'，
        '.flip-view.p-relative.over-hidden.w-100'，
        '#link-footer-vm'，
        '.link-footer-ctnr.z-link-footer-ctnr'，
        '.room-feed.trends'，
        '.section-block.f-clear.z-section-blocks'，
        '#rank-list-ctnr-box'，
        '.rank-list-ctnr.p-absolute.border-box.bgStyle'，
        '#rank-list-vm'，
        '.live-skin-coloration-area.p-relative.rank-list-section.new'，
        '.chat-item.convention-msg.border-box'，
        '.left-entry__title'，
        '.bili-dyn-publishing'，
        '.bili-dyn-list-tabs__list'，
        '.bili-dyn-list-tabs'，
        '.opus-module-author__right'，
    ];

    function removeElements() {
        selectors。forEach(selector => {
            document。querySelectorAll(selector)。forEach(el => el。remove());
        });
    }

    // 立即执行一次清理
    removeElements();

    // 监听DOM变化，确保动态加载的元素也被移除
    const observer = new MutationObserver(removeElements);
    observer。observe(document。body， { childList: true， subtree: true });
})();

'use client';
import { useEffect } from 'react';

export default function PeekScript() {
  useEffect(() => {
    const config = {
      key: 'c76e9d6c-44fd-4cda-821d-fc3611e33423'
    };

    (window as any)._peekConfig = config;
    const idPrefix = 'peek-book-button';
    const id = idPrefix + '-js';

    if (!document.getElementById(id)) {
      const head = document.getElementsByTagName('head')[0];
      const el = document.createElement('script');
      el.id = id;
      const date = new Date();
      const stamp = date.getMonth() + "-" + date.getDate();
      const basePath = "https://js.peek.com";
      el.src = basePath + "/widget_button.js?ts=" + stamp;
      head.appendChild(el);

      const cssId = idPrefix + '-css';
      const cssEl = document.createElement('link');
      cssEl.id = cssId;
      cssEl.href = basePath + "/widget_button.css?ts=" + stamp;
      cssEl.rel = "stylesheet";
      cssEl.type = "text/css";
      head.appendChild(cssEl);
    }
  }, []);
  return null;
}

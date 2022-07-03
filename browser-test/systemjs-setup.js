document.head.appendChild(
  Object.assign(document.createElement("script"), {
    type: "systemjs-importmap",
    textContent: `
      {
        "imports": {
          "rxjs": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs.min.js",
          "rxjs/operators": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs-operators.min.js",
          "@angular/core": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core/system/es2015/ivy/angular-core.min.js",
          "@angular/common": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__common/system/es2015/ivy/angular-common.min.js",
          "@angular/common/http": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__common/system/es2015/ivy/angular-http.min.js",
          "@angular/animations": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__animations/system/es2015/ivy/angular-animations.min.js",
          "@angular/animations/browser": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__animations/system/es2015/ivy/angular-browser.min.js",
          "@angular/platform-browser": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__platform-browser/system/es2015/ivy/angular-platform-browser.min.js",
          "@angular/platform-browser/animations": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__platform-browser/system/es2015/ivy/angular-animations.min.js",
          "@angular/forms": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__forms/system/es2015/ivy/angular-forms.min.js",
          "@angular/cdk": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-cdk.min.js",
          "@angular/cdk/a11y": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-a11y.min.js",
          "@angular/cdk/accordion": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-accordion.min.js",
          "@angular/cdk/bidi": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-bidi.min.js",
          "@angular/cdk/clipboard": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-clipboard.min.js",
          "@angular/cdk/coercion": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-coercion.min.js",
          "@angular/cdk/collections": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-collections.min.js",
          "@angular/cdk/dialog": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-dialog.min.js",
          "@angular/cdk/drag-drop": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-drag-drop.min.js",
          "@angular/cdk/keycodes": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-keycodes.min.js",
          "@angular/cdk/layout": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-layout.min.js",
          "@angular/cdk/menu": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-menu.min.js",
          "@angular/cdk/observers": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-observers.min.js",
          "@angular/cdk/overlay": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-overlay.min.js",
          "@angular/cdk/platform": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-platform.min.js",
          "@angular/cdk/portal": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-portal.min.js",
          "@angular/cdk/scrolling": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-scrolling.min.js",
          "@angular/cdk/stepper": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-stepper.min.js",
          "@angular/cdk/table": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-table.min.js",
          "@angular/cdk/text-field": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-text-field.min.js",
          "@angular/cdk/tree": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__cdk/system/es2015/ivy/angular-tree.min.js",
          "@angular/material/autocomplete": "/base/system/es2015/ivy/angular-autocomplete.min.js",
          "@angular/material/badge": "/base/system/es2015/ivy/angular-badge.min.js",
          "@angular/material/bottom-sheet": "/base/system/es2015/ivy/angular-bottom-sheet.min.js",
          "@angular/material/button-toggle": "/base/system/es2015/ivy/angular-button-toggle.min.js",
          "@angular/material/button": "/base/system/es2015/ivy/angular-button.min.js",
          "@angular/material/card": "/base/system/es2015/ivy/angular-card.min.js",
          "@angular/material/checkbox": "/base/system/es2015/ivy/angular-checkbox.min.js",
          "@angular/material/chips": "/base/system/es2015/ivy/angular-chips.min.js",
          "@angular/material/core": "/base/system/es2015/ivy/angular-core.min.js",
          "@angular/material/datepicker": "/base/system/es2015/ivy/angular-datepicker.min.js",
          "@angular/material/dialog": "/base/system/es2015/ivy/angular-dialog.min.js",
          "@angular/material/divider": "/base/system/es2015/ivy/angular-divider.min.js",
          "@angular/material/expansion": "/base/system/es2015/ivy/angular-expansion.min.js",
          "@angular/material/form-field": "/base/system/es2015/ivy/angular-form-field.min.js",
          "@angular/material/grid-list": "/base/system/es2015/ivy/angular-grid-list.min.js",
          "@angular/material/icon": "/base/system/es2015/ivy/angular-icon.min.js",
          "@angular/material/input": "/base/system/es2015/ivy/angular-input.min.js",
          "@angular/material/list": "/base/system/es2015/ivy/angular-list.min.js",
          "@angular/material": "/base/system/es2015/ivy/angular-material.min.js",
          "@angular/material/menu": "/base/system/es2015/ivy/angular-menu.min.js",
          "@angular/material/paginator": "/base/system/es2015/ivy/angular-paginator.min.js",
          "@angular/material/progress-bar": "/base/system/es2015/ivy/angular-progress-bar.min.js",
          "@angular/material/progress-spinner": "/base/system/es2015/ivy/angular-progress-spinner.min.js",
          "@angular/material/radio": "/base/system/es2015/ivy/angular-radio.min.js",
          "@angular/material/select": "/base/system/es2015/ivy/angular-select.min.js",
          "@angular/material/sidenav": "/base/system/es2015/ivy/angular-sidenav.min.js",
          "@angular/material/slide-toggle": "/base/system/es2015/ivy/angular-slide-toggle.min.js",
          "@angular/material/slider": "/base/system/es2015/ivy/angular-slider.min.js",
          "@angular/material/snack-bar": "/base/system/es2015/ivy/angular-snack-bar.min.js",
          "@angular/material/sort": "/base/system/es2015/ivy/angular-sort.min.js",
          "@angular/material/stepper": "/base/system/es2015/ivy/angular-stepper.min.js",
          "@angular/material/table": "/base/system/es2015/ivy/angular-table.min.js",
          "@angular/material/tabs": "/base/system/es2015/ivy/angular-tabs.min.js",
          "@angular/material/toolbar": "/base/system/es2015/ivy/angular-toolbar.min.js",
          "@angular/material/tooltip": "/base/system/es2015/ivy/angular-tooltip.min.js",
          "@angular/material/tree": "/base/system/es2015/ivy/angular-tree.min.js"
        }
      }`,
  })
);

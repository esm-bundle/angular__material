describe("@esm-bundle/angular__material", () => {
  const packages = [
    {
      packageName: "@angular/material/autocomplete",
      filename: "angular-autocomplete",
      expectedImport: "MatAutocomplete",
    },
    {
      packageName: "@angular/material/badge",
      filename: "angular-badge",
      expectedImport: "MatBadge",
    },
    {
      packageName: "@angular/material/bottom-sheet",
      filename: "angular-bottom-sheet",
      expectedImport: "MatBottomSheet",
    },
    {
      packageName: "@angular/material/button-toggle",
      filename: "angular-button-toggle",
      expectedImport: "MatButtonToggle",
    },
    {
      packageName: "@angular/material/button",
      filename: "angular-button",
      expectedImport: "MatButton",
    },
    {
      packageName: "@angular/material/card",
      filename: "angular-card",
      expectedImport: "MatCard",
    },
    {
      packageName: "@angular/material/checkbox",
      filename: "angular-checkbox",
      expectedImport: "MatCheckbox",
    },
    {
      packageName: "@angular/material/chips",
      filename: "angular-chips",
      expectedImport: "MatChip",
    },
    {
      packageName: "@angular/material/core",
      filename: "angular-core",
      expectedImport: "DateAdapter",
    },
    {
      packageName: "@angular/material/datepicker",
      filename: "angular-datepicker",
      expectedImport: "MatDatepicker",
    },
    {
      packageName: "@angular/material/dialog",
      filename: "angular-dialog",
      expectedImport: "MatDialog",
    },
    {
      packageName: "@angular/material/divider",
      filename: "angular-divider",
      expectedImport: "MatDivider",
    },
    {
      packageName: "@angular/material/expansion",
      filename: "angular-expansion",
      expectedImport: "MatExpansionPanel",
    },
    {
      packageName: "@angular/material/form-field",
      filename: "angular-form-field",
      expectedImport: "MatFormField",
    },
    {
      packageName: "@angular/material/grid-list",
      filename: "angular-grid-list",
      expectedImport: "MatGridList",
    },
    {
      packageName: "@angular/material/icon",
      filename: "angular-icon",
      expectedImport: "MatIcon",
    },
    {
      packageName: "@angular/material/input",
      filename: "angular-input",
      expectedImport: "MatInput",
    },
    {
      packageName: "@angular/material/list",
      filename: "angular-list",
      expectedImport: "MatList",
    },
    {
      packageName: "@angular/material/menu",
      filename: "angular-menu",
      expectedImport: "MatMenu",
    },
    {
      packageName: "@angular/material/paginator",
      filename: "angular-paginator",
      expectedImport: "MatPaginator",
    },
    {
      packageName: "@angular/material/progress-bar",
      filename: "angular-progress-bar",
      expectedImport: "MatProgressBar",
    },
    {
      packageName: "@angular/material/progress-spinner",
      filename: "angular-progress-spinner",
      expectedImport: "MatProgressSpinner",
    },
    {
      packageName: "@angular/material/progress-bar",
      filename: "angular-progress-bar",
      expectedImport: "MatProgressBar",
    },
    {
      packageName: "@angular/material/radio",
      filename: "angular-radio",
      expectedImport: "MatRadioButton",
    },
    {
      packageName: "@angular/material/select",
      filename: "angular-select",
      expectedImport: "MatSelect",
    },
    {
      packageName: "@angular/material/sidenav",
      filename: "angular-sidenav",
      expectedImport: "MatSidenav",
    },
    {
      packageName: "@angular/material/slide-toggle",
      filename: "angular-slide-toggle",
      expectedImport: "MatSlideToggle",
    },
    {
      packageName: "@angular/material/slider",
      filename: "angular-slider",
      expectedImport: "MatSlider",
    },
    {
      packageName: "@angular/material/snack-bar",
      filename: "angular-snack-bar",
      expectedImport: "MatSnackBar",
    },
    {
      packageName: "@angular/material/sort",
      filename: "angular-sort",
      expectedImport: "MatSort",
    },
    {
      packageName: "@angular/material/stepper",
      filename: "angular-stepper",
      expectedImport: "MatStepper",
    },
    {
      packageName: "@angular/material/table",
      filename: "angular-table",
      expectedImport: "MatTable",
    },
    {
      packageName: "@angular/material/tabs",
      filename: "angular-tabs",
      expectedImport: "MatTab",
    },
    {
      packageName: "@angular/material/toolbar",
      filename: "angular-toolbar",
      expectedImport: "MatToolbar",
    },
    {
      packageName: "@angular/material/tooltip",
      filename: "angular-tooltip",
      expectedImport: "MatTooltip",
    },
    {
      packageName: "@angular/material/tree",
      filename: "angular-tree",
      expectedImport: "MatTree",
    },
  ];

  packages.forEach(({ packageName, filename, expectedImport }) => {
    describe(packageName, () => {
      ["es2015", "es2020"].forEach((ecma) => {
        it(`can load the System.register ${ecma} bundle`, async () => {
          const m = await System.import(
            `/base/system/${ecma}/ivy/${filename}.js`
          );
          expect(m[expectedImport]).toBeDefined();
        });

        it(`can load the System.register ${ecma} prod bundle`, async () => {
          const m = await System.import(
            `/base/system/${ecma}/ivy/${filename}.min.js`
          );
          expect(m[expectedImport]).toBeDefined();
        });
      });
    });
  });
});

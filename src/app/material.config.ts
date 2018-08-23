import { NgModule } from '@angular/core';

import { MatButtonModule, MatInputModule } from '@angular/material';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';



@NgModule({
    imports: [MatButtonModule, MatMenuModule, MatIconModule,
        MatToolbarModule, MatFormFieldModule, MatInputModule
        , MatCardModule
    ],
    exports: [MatButtonModule, MatMenuModule, MatIconModule,
        MatToolbarModule, MatFormFieldModule, MatInputModule,
        MatCardModule
    ],

})
export class MaterialModule { }
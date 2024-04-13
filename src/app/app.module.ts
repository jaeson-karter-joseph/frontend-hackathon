import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from './modules/shared/app-layout/app-layout.module';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ConfigurationService } from './modules/services/configuration.service';
import { OidcHelperService } from './modules/services/oidc-helper.service';
import { LocalStoreManager } from './modules/services/local-store-manager.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ConfigurationService,
    OidcHelperService,
    LocalStoreManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';


export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
export * from './components/common/api';
export * from './components/common/shared';
export * from './components/accordion/accordion';
export * from './components/autocomplete/autocomplete';
export * from './components/blockui/blockui';
export * from './components/breadcrumb/breadcrumb';
export * from './components/button/button';
export * from './components/captcha/captcha';
export * from './components/calendar/calendar';
export * from './components/carousel/carousel';
export * from './components/chart/chart';
export * from './components/checkbox/checkbox';
export * from './components/chips/chips';
export * from './components/codehighlighter/codehighlighter';
export * from './components/contextmenu/contextmenu';
export * from './components/datagrid/datagrid';
export * from './components/datalist/datalist';
export * from './components/datascroller/datascroller';
export * from './components/datatable/datatable';
export * from './components/defer/defer';
export * from './components/colorpicker/colorpicker';
export * from './components/confirmdialog/confirmdialog';
export * from './components/dialog/dialog';
export * from './components/dragdrop/dragdrop';
export * from './components/dropdown/dropdown';
export * from './components/editor/editor';
export * from './components/fieldset/fieldset';
export * from './components/fileupload/fileupload';
export * from './components/galleria/galleria';
export * from './components/gmap/gmap';
export * from './components/growl/growl';
export * from './components/inplace/inplace';
export * from './components/inputmask/inputmask';
export * from './components/inputswitch/inputswitch';
export * from './components/inputtext/inputtext';
export * from './components/inputtextarea/inputtextarea';
export * from './components/lightbox/lightbox';
export * from './components/listbox/listbox';
export * from './components/megamenu/megamenu';
export * from './components/menu/menu';
export * from './components/menubar/menubar';
export * from './components/messages/messages';
export * from './components/multiselect/multiselect';
export * from './components/orderlist/orderlist';
export * from './components/organizationchart/organizationchart';
export * from './components/overlaypanel/overlaypanel';
export * from './components/paginator/paginator';
export * from './components/panel/panel';
export * from './components/panelmenu/panelmenu';
export * from './components/password/password';
export * from './components/picklist/picklist';
export * from './components/progressbar/progressbar';
export * from './components/radiobutton/radiobutton';
export * from './components/rating/rating';
export * from './components/schedule/schedule';
export * from './components/selectbutton/selectbutton';
export * from './components/slidemenu/slidemenu';
export * from './components/slider/slider';
export * from './components/spinner/spinner';
export * from './components/splitbutton/splitbutton';
export * from './components/steps/steps';
export * from './components/tabview/tabview';
export * from './components/tabmenu/tabmenu';
export * from './components/terminal/terminal';
export * from './components/tieredmenu/tieredmenu';
export * from './components/togglebutton/togglebutton';
export * from './components/toolbar/toolbar';
export * from './components/tooltip/tooltip';
export * from './components/tree/tree';
export * from './components/treetable/treetable';
export * from './components/tristatecheckbox/tristatecheckbox';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}

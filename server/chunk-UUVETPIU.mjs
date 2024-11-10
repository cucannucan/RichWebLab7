import './polyfills.server.mjs';
import{$ as ze,A as Ce,Aa as U,B as a,C as l,D as Ge,E as J,F as p,G as m,H as je,I as u,J as Be,K as Ve,L as M,M as A,N as w,O as B,P as E,Q as He,R as Ue,S as Le,T as We,V as $e,Z as qe,a as ke,b as Ne,ba as be,c as Oe,ca as H,d as Pe,da as _,e as K,ea as Ze,f as N,fa as De,g as me,h as O,ha as Xe,i as b,ia as Ye,j as D,ja as Q,k as P,ka as Ke,l as h,la as F,m as ge,ma as Je,n as y,na as Qe,o as C,p as _e,q as R,qa as et,r as ve,s as d,t as s,u as ye,ua as tt,v as G,va as it,w as g,x as j,xa as ee,y as Re,ya as nt,z as V,za as rt}from"./chunk-PYGRTYYM.mjs";import{a as c,b as f}from"./chunk-5XUXGTUW.mjs";var te=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["app-root"]],standalone:!0,features:[E],decls:6,vars:0,consts:[["routerLink","/"],["routerLink","/todos"]],template:function(t,n){t&1&&(a(0,"nav")(1,"a",0),u(2,"Home"),l(),a(3,"a",1),u(4,"To-Do List"),l()(),Ge(5,"router-outlet"))},dependencies:[U,it,nt,F],styles:["nav[_ngcontent-%COMP%]{margin-bottom:20px}a[_ngcontent-%COMP%]{margin-right:10px}"]})};var mt=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(ye),s(ve))}}static{this.\u0275dir=h({type:i})}}return i})(),Ot=(()=>{class i extends mt{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=_e(i)))(r||i)}})()}static{this.\u0275dir=h({type:i,features:[g]})}}return i})(),gt=new b("");var Pt={provide:gt,useExisting:N(()=>k),multi:!0};function Rt(){let i=De()?De().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Gt=new b(""),k=(()=>{class i extends mt{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Rt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(ye),s(ve),s(Gt,8))}}static{this.\u0275dir=h({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&p("input",function(v){return r._handleInput(v.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(v){return r._compositionEnd(v.target.value)})},features:[B([Pt]),g]})}}return i})();function jt(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var Ae=new b(""),_t=new b("");function Bt(i){return jt(i.value)?{required:!0}:null}function at(i){return null}function vt(i){return i!=null}function yt(i){return $e(i)?Ne(i):i}function Ct(i){let e={};return i.forEach(t=>{e=t!=null?c(c({},e),t):e}),Object.keys(e).length===0?null:e}function Vt(i,e){return e.map(t=>t(i))}function Ht(i){return!i.validate}function bt(i){return i.map(e=>Ht(e)?e:t=>e.validate(t))}function Ut(i){if(!i)return null;let e=i.filter(vt);return e.length==0?null:function(t){return Ct(Vt(t,e))}}function we(i){return i!=null?Ut(bt(i)):null}function Lt(i){if(!i)return null;let e=i.filter(vt);return e.length==0?null:function(t){let n=Vt(t,e).map(yt);return Pe(n).pipe(Oe(Ct))}}function Ee(i){return i!=null?Lt(bt(i)):null}function lt(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Wt(i){return i._rawValidators}function $t(i){return i._rawAsyncValidators}function Me(i){return i?Array.isArray(i)?i:[i]:[]}function ne(i,e){return Array.isArray(i)?i.includes(e):i===e}function ut(i,e){let t=Me(e);return Me(i).forEach(r=>{ne(t,r)||t.push(r)}),t}function dt(i,e){return Me(e).filter(t=>!ne(i,t))}var re=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=we(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ee(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},I=class extends re{get formDirective(){return null}get path(){return null}},X=class extends re{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},oe=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},qt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Li=f(c({},qt),{"[class.ng-submitted]":"isSubmitted"}),ue=(()=>{class i extends oe{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(X,2))}}static{this.\u0275dir=h({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[g]})}}return i})(),Dt=(()=>{class i extends oe{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(I,10))}}static{this.\u0275dir=h({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[g]})}}return i})();var W="VALID",ie="INVALID",x="PENDING",$="DISABLED",T=class{},se=class extends T{constructor(e,t){super(),this.value=e,this.source=t}},z=class extends T{constructor(e,t){super(),this.pristine=e,this.source=t}},Z=class extends T{constructor(e,t){super(),this.touched=e,this.source=t}},S=class extends T{constructor(e,t){super(),this.status=e,this.source=t}};function Mt(i){return(de(i)?i.validators:i)||null}function zt(i){return Array.isArray(i)?we(i):i||null}function At(i,e){return(de(e)?e.asyncValidators:i)||null}function Zt(i){return Array.isArray(i)?Ee(i):i||null}function de(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Xt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new K(1e3,"");if(!n[t])throw new K(1001,"")}function Yt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new K(1002,"")})}var ae=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=H(()=>this.statusReactive()),this.statusReactive=G(void 0),this._pristine=H(()=>this.pristineReactive()),this.pristineReactive=G(!0),this._touched=H(()=>this.touchedReactive()),this.touchedReactive=G(!1),this._events=new ke,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return _(this.statusReactive)}set status(e){_(()=>this.statusReactive.set(e))}get valid(){return this.status===W}get invalid(){return this.status===ie}get pending(){return this.status==x}get disabled(){return this.status===$}get enabled(){return this.status!==$}get pristine(){return _(this.pristineReactive)}set pristine(e){_(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return _(this.touchedReactive)}set touched(e){_(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ut(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ut(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(dt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(dt(e,this._rawAsyncValidators))}hasValidator(e){return ne(this._rawValidators,e)}hasAsyncValidator(e){return ne(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Z(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new Z(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new z(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new z(!0,n))}markAsPending(e={}){this.status=x;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new S(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(c({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=$,this.errors=null,this._forEachChild(r=>{r.disable(f(c({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new se(this.value,n)),this._events.next(new S(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=W,this._forEachChild(n=>{n.enable(f(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===W||this.status===x)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new se(this.value,t)),this._events.next(new S(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(c({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?$:W}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=yt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new S(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?$:this.errors?ie:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(ie)?ie:W}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new z(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Z(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){de(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=zt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Zt(this._rawAsyncValidators)}},le=class extends ae{constructor(e,t,n){super(Mt(t),At(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Yt(this,!0,e),Object.keys(e).forEach(n=>{Xt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Fe=new b("CallSetDisabledState",{providedIn:"root",factory:()=>xe}),xe="always";function Kt(i,e){return[...e.path,i]}function wt(i,e,t=xe){Et(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Qt(i,e),ti(i,e),ei(i,e),Jt(i,e)}function ct(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Jt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Et(i,e){let t=Wt(i);e.validator!==null?i.setValidators(lt(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=$t(i);e.asyncValidator!==null?i.setAsyncValidators(lt(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();ct(e._rawValidators,r),ct(e._rawAsyncValidators,r)}function Qt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ft(i,e)})}function ei(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ft(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ft(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ti(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function ii(i,e){i==null,Et(i,e)}function ni(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ri(i){return Object.getPrototypeOf(i.constructor)===Ot}function oi(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function si(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===k?t=o:ri(o)?n=o:r=o}),r||n||t||null}var ai={provide:I,useExisting:N(()=>Se)},q=Promise.resolve(),Se=(()=>{class i extends I{get submitted(){return _(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=H(()=>this.submittedReactive()),this.submittedReactive=G(!1),this._directives=new Set,this.ngSubmit=new R,this.form=new le({},we(t),Ee(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){q.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),wt(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){q.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){q.then(()=>{let n=this._findContainer(t.path),r=new le({});ii(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){q.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){q.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),oi(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(s(Ae,10),s(_t,10),s(Fe,8))}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&p("submit",function(v){return r.onSubmit(v)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[B([ai]),g]})}}return i})();function ht(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ft(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var li=class extends ae{constructor(e=null,t,n){super(Mt(t),At(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),de(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ft(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ht(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ht(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ft(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ui={provide:X,useExisting:N(()=>Y)},pt=Promise.resolve(),Y=(()=>{class i extends X{constructor(t,n,r,o,v,Nt){super(),this._changeDetectorRef=v,this.callSetDisabledState=Nt,this.control=new li,this._registered=!1,this.name="",this.update=new R,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=si(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ni(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){wt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){pt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&be(n);pt.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Kt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(s(I,9),s(Ae,10),s(_t,10),s(gt,10),s(ze,8),s(Fe,8))}}static{this.\u0275dir=h({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[B([ui]),g,ge]})}}return i})(),xt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var di=(()=>{class i{constructor(){this._validator=at}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):at,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=h({type:i,features:[ge]})}}return i})();var ci={provide:Ae,useExisting:N(()=>Ie),multi:!0};var Ie=(()=>{class i extends di{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=be,this.createValidator=t=>Bt}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=_e(i)))(r||i)}})()}static{this.\u0275dir=h({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&Re("required",r._enabled?"":null)},inputs:{required:"required"},features:[B([ci]),g]})}}return i})();var hi=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=P({type:i})}static{this.\u0275inj=O({})}}return i})();var ce=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Fe,useValue:t.callSetDisabledState??xe}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=P({type:i})}static{this.\u0275inj=O({imports:[hi]})}}return i})();var pi=i=>({completed:i});function mi(i,e){if(i&1&&(a(0,"p"),u(1),Ue(2,"date"),l()),i&2){let t=m().$implicit;d(),Ve("Scheduled for: ",Le(2,1,t.time,"short"),"")}}function gi(i,e){if(i&1){let t=J();a(0,"div")(1,"div",6)(2,"h3"),u(3),l(),a(4,"p"),u(5,"Status: "),a(6,"span",7),u(7),l()(),j(8,mi,3,4,"p",8),a(9,"button",9),p("click",function(){let r=y(t).$implicit,o=m();return C(o.editTask(r.id))}),u(10,"Edit Task"),l(),a(11,"button",9),p("click",function(){let r=y(t).$implicit,o=m();return C(o.deleteTask(r.id))}),u(12,"Delete Task"),l()()()}if(i&2){let t=e.$implicit;d(3),Be(t.task),d(3),V("ngClass",He(4,pi,t.isCompleted)),d(),Ve(" ",t.isCompleted?"Completed":"Not Completed"," "),d(),V("ngIf",t.time)}}var he=class i{constructor(e){this.router=e}homeTodos=[{id:1,task:"Learn Angular",isCompleted:!1,time:""},{id:2,task:"Write Code",isCompleted:!0,time:""},{id:3,task:"Test Angular Features",isCompleted:!1,time:"2024-11-10T14:30"}];newTask="";newTaskTime="";searchTerm="";editTask(e){this.router.navigate(["/todo",e])}deleteTask(e){this.homeTodos=this.homeTodos.filter(t=>t.id!==e)}addNewTask(){if(this.newTask.trim()!==""){let t={id:this.homeTodos.length>0?Math.max(...this.homeTodos.map(n=>n.id))+1:1,task:this.newTask,isCompleted:!1,time:this.newTaskTime};this.homeTodos.push(t),this.newTask="",this.newTaskTime=""}}get filteredTodos(){return this.homeTodos.filter(e=>e.task.toLowerCase().includes(this.searchTerm.toLowerCase())||e.time&&e.time.includes(this.searchTerm))}static \u0275fac=function(t){return new(t||i)(s(ee))};static \u0275cmp=D({type:i,selectors:[["app-home"]],standalone:!0,features:[E],decls:13,vars:5,consts:[["placeholder","Search tasks...",3,"ngModelChange","ngModel"],[3,"ngSubmit"],["name","task","placeholder","Enter new task","required","",3,"ngModelChange","ngModel"],["name","time","type","datetime-local","placeholder","Set a time for the task","required","",3,"ngModelChange","ngModel"],["type","submit",3,"disabled"],[4,"ngFor","ngForOf"],[1,"task-item"],[3,"ngClass"],[4,"ngIf"],[3,"click"]],template:function(t,n){t&1&&(a(0,"h2"),u(1,"Tasks"),l(),a(2,"div")(3,"input",0),w("ngModelChange",function(o){return A(n.searchTerm,o)||(n.searchTerm=o),o}),l()(),a(4,"form",1),p("ngSubmit",function(){return n.addNewTask()}),a(5,"div")(6,"input",2),w("ngModelChange",function(o){return A(n.newTask,o)||(n.newTask=o),o}),l()(),a(7,"div")(8,"input",3),w("ngModelChange",function(o){return A(n.newTaskTime,o)||(n.newTaskTime=o),o}),l()(),a(9,"div")(10,"button",4),u(11,"Add Task"),l()()(),j(12,gi,13,6,"div",5)),t&2&&(d(3),M("ngModel",n.searchTerm),d(3),M("ngModel",n.newTask),d(2),M("ngModel",n.newTaskTime),d(2),V("disabled",!n.newTask.trim()),d(2),V("ngForOf",n.filteredTodos))},dependencies:[F,Xe,Ye,Q,Ke,ce,xt,k,ue,Dt,Ie,Y,Se],styles:["h2[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-bottom:20px}h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:10px}button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;font-size:1rem;cursor:pointer;border-radius:5px;margin-top:10px}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}input[_ngcontent-%COMP%]{padding:10px;font-size:1rem;border:1px solid #ccc;border-radius:5px;width:80%;margin-bottom:20px;display:block;margin-left:auto;margin-right:auto}input[_ngcontent-%COMP%]:focus{outline:none;border-color:#007bff}.task-item[_ngcontent-%COMP%]{padding:15px;background-color:#f8f9fa;border:1px solid #ddd;border-radius:8px;margin-bottom:10px}.completed[_ngcontent-%COMP%]{text-decoration:line-through;color:green}.not-completed[_ngcontent-%COMP%]{color:red}.task-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px}.add-task-container[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:center;align-items:center}"]})};var fe=class i{todos=[{id:1,task:"Learn Angular",isCompleted:!1},{id:2,task:"Write Code",isCompleted:!0}];getTodoById(e){return this.todos.find(t=>t.id===e)}updateTodoTask(e,t){let n=this.todos.find(r=>r.id===e);n&&(n.task=t)}deleteTodo(e){this.todos=this.todos.filter(t=>t.id!==e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=me({token:i,factory:i.\u0275fac,providedIn:"root"})};function vi(i,e){if(i&1){let t=J();a(0,"div")(1,"h2"),u(2,"Edit Task"),l(),a(3,"input",2),w("ngModelChange",function(r){y(t);let o=m();return A(o.updatedTask,r)||(o.updatedTask=r),C(r)}),l(),a(4,"button",3),p("click",function(){y(t);let r=m();return C(r.saveTask())}),u(5,"Save"),l(),a(6,"button",3),p("click",function(){y(t);let r=m();return C(r.deleteTodo())}),u(7,"Delete Task"),l()()}if(i&2){let t=m();d(3),M("ngModel",t.updatedTask)}}function yi(i,e){i&1&&(a(0,"p"),u(1,"Task not found!"),l())}var pe=class i{constructor(e,t,n){this.route=e;this.todoService=t;this.router=n}todo;updatedTask="";ngOnInit(){let e=+this.route.snapshot.paramMap.get("id");this.todo=this.todoService.getTodoById(e),this.todo?this.updatedTask=this.todo.task:console.log("Task not found")}saveTask(){this.todo&&(this.todoService.updateTodoTask(this.todo.id,this.updatedTask),this.router.navigate(["/"]))}deleteTodo(){this.todo&&(this.todoService.deleteTodo(this.todo.id),this.router.navigate(["/"]))}static \u0275fac=function(t){return new(t||i)(s(tt),s(fe),s(ee))};static \u0275cmp=D({type:i,selectors:[["app-todo"]],standalone:!0,features:[E],decls:3,vars:2,consts:[["taskNotFound",""],[4,"ngIf","ngIfElse"],["placeholder","Edit task details",3,"ngModelChange","ngModel"],[3,"click"]],template:function(t,n){if(t&1&&j(0,vi,8,1,"div",1)(1,yi,2,0,"ng-template",null,0,We),t&2){let r=je(2);V("ngIf",n.todo)("ngIfElse",r)}},dependencies:[F,Q,ce,k,ue,Y],styles:["h2[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-bottom:20px}input[_ngcontent-%COMP%]{padding:10px;font-size:1rem;border:1px solid #ccc;border-radius:5px;width:80%;margin-bottom:20px;display:block;margin-left:auto;margin-right:auto}input[_ngcontent-%COMP%]:focus{outline:none;border-color:#007bff}button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;font-size:1rem;cursor:pointer;border-radius:5px;margin:10px}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}ng-template[_ngcontent-%COMP%]{text-align:center;font-size:1.2rem;color:#f44336}.task-container[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center}"]})};var Te=[{path:"",component:he},{path:"todo/:id",component:pe}],It=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[U.forRoot(Te),U]})};var Tt={providers:[qe({eventCoalescing:!0}),rt(Te),Qe()]};var Ci={providers:[et()]},kt=Ze(Tt,Ci);var Vi=()=>Je(te,kt),vn=Vi;export{vn as a};

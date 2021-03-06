/* eslint-disable prettier/prettier */
/* eslint-disable  */
export interface PinturaComponentEvents {
  onLoadstart?: (detail: any) => void;
  onLoadabort?: (detail: any) => void;
  onLoaderror?: (detail: any) => void;
  onLoadprogress?: (detail: any) => void;
  onLoad?: (detail: any) => void;
  onProcessstart?: (detail: any) => void;
  onProcessabort?: (detail: any) => void;
  onProcesserror?: (detail: any) => void;
  onProcessprogress?: (detail: any) => void;
  onProcess?: (detail: any) => void;
  onUpdate?: (detail: any) => void;
  onUndo?: (detail: any) => void;
  onRedo?: (detail: any) => void;
  onRevert?: (detail: any) => void;
  onClose?: (detail: any) => void;
  onDestroy?: (detail: any) => void;
  onAddshape?: (detail: any) => void;
  onSelectshape?: (detail: any) => void;
  onUpdateshape?: (detail: any) => void;
  onRemoveshape?: (detail: any) => void;
}

export interface PinturaComponentModalEvents extends PinturaComponentEvents {
  onShow?: (detail: any) => void;
  onHide?: (detail: any) => void;
}

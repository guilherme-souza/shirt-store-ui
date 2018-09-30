import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modals: any[] = [];

  constructor() { }

  addModal(modal: any) {
    this.modals.push(modal);
  }

  removeModal(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  openModal(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }

  closeModal(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}

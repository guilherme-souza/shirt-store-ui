import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  template: `
      <div class="app-modal">
        <div class="app-modal-body">
          <ng-content></ng-content>
        </div>
      </div>
      <div class="app-modal-background"></div>
      `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      const modal = this;

      // append element in the bottom of the page setting display none to hide it
      this.element.style.display = 'none';
      document.body.appendChild(this.element);

      // add listener to close modal when clicking in the background
      this.element.addEventListener('click', function (e: any) {
          if (e.target.className === 'app-modal') {
              modal.close();
          }
      });

      // add self to the modal service so it's accessible from the controllers
      this.modalService.addModal(this);
  }

  ngOnDestroy(): void {
      this.modalService.removeModal(this.id);
      this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('app-modal-open');
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('app-modal-open');
  }
}

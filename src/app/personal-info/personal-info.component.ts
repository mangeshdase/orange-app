import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  list = [
    { title: 'Nodejs' },
    { title: 'Javascript' },
    { title: 'Angular' },
    { title: 'express' },
    { title: 'ajax' },
    { title: 'bootstrap' },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  showDetailsModal(item) {
    console.log(item);

    const modalRef = this.modalService.open(DetailsModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.data = item;
  }
}

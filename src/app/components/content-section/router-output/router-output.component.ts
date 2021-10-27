import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../services/communication-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'router-output',
  templateUrl: './router-output.component.html',
  styleUrls: ['./router-output.component.scss']
})
export class RouterOutputComponent implements OnInit {

  constructor(
    private communicator: CommunicationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.communicator.inform('activeRoute', data.startPage);
    })
  }


}

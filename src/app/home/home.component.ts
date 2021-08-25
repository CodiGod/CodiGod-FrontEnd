import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { Post } from '../interfaces/interfaces';
import { style } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private RestApiService: RestApiService) { }

  public list: any;
  a = {}

  stylePone = ``;
  stylePoneT = ``;

  stylePoneTh = ``;


  public cargarData() {
    this.RestApiService.getPostAllByid(0).subscribe((res: any) => {
      this.list = res;

      this.stylePone = `
      background: url("${this.list[0].img}");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border: 1px solid #fff;`
      this.stylePoneT = `
      background: url("${this.list[1].img}");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border: 1px solid #fff;`
      this.stylePoneTh = `
      background: url("${this.list[2].img}");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border: 1px solid #fff;`
    }, err => {
      console.log(err)
    })
  }
  //p1 estilos

  ngOnInit(): void {
    this.cargarData();
  }

}

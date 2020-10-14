import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  private campaigns: any = [
    {
      title: "wednesday",
      src:
        "https://res.cloudinary.com/tumi/image/upload/v1602648200/Home%20PWAs/Baron/compressed/BD_BARON_RIB_WEDNESDAY_In_app_awarness_screen_1000_x_7000.jpg"
    },
    {
      title: "tuesday",
      src:
        "https://res.cloudinary.com/tumi/image/upload/v1602649488/Home%20PWAs/Baron/compressed/BD_BARON_STEAK_TUESDAY_In_app_awarness_screen_1000_x_7000.jpg"
    },
    {
      title: "ladies",
      src:
        "https://res.cloudinary.com/tumi/image/upload/v1602649573/Home%20PWAs/Baron/compressed/BD_BARON_LADIES_LUNCH_In_app_awarness_screen_1000_x_7000.jpg"
    }
  ];
  private current: any = null;

  ngOnInit(): void {}

  openCampaign(title) {
    console.log(title);
  }
}

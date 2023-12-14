import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-old-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>old-user works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OldUserComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

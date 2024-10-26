import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QuizRoutingModule
  ],
  declarations: [QuizComponent]
})
export class QuizPageModule {}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TodoComponent } from './app/pages/Todo/Todo.component';


bootstrapApplication(TodoComponent, appConfig)
  .catch((err) => console.error(err));

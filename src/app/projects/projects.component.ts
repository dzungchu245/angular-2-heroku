import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import { markedTrigger, itemStateTrigger, slideStateTrigger } from './animations';
import { AnimationEvent } from '@angular/animations';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  //@HostBinding('@routeFadeState') routeAnime = true;
  @HostBinding('@routeSlideState') routeAnime = true;
  projects: Project[];
  visibleProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if (this.projects.length > 0) {
            this.visibleProjects.push(this.projects[0]);
          }
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    setTimeout(() => {
      this.projects.unshift(project);
    }, 300);
  }

  onItemAnimated(event: AnimationEvent, idx: number) {
    if (event.fromState !== 'void') {
      return;
    }
    if (this.projects.length > idx + 1) {
      this.visibleProjects.push(this.projects[idx + 1]);
    } else {
      this.projects = this.visibleProjects;
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import { Project } from './models/project.model';

@Pipe({
    name: 'filterText',
    pure: false
})

export class FilterText implements PipeTransform {
    transform(projects: Project[], args:string[]): Project[] {
        let resultArray = [];
        if (!projects) {
            return resultArray;
          }
            else if (!args) {
                return  projects;
            }
            else {
                for (let project of projects) {
                    if (project.title != null && project.title.match(new RegExp(''+args, 'i'))) {
                        resultArray.push(project);
                    }
                }
                return resultArray;
            }
    }

}

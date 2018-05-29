import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-demo',
  templateUrl: 'help-demo.component.html',
  styleUrls: ['help-demo.component.scss']
})
export class HelpDemoComponent implements OnInit {

  demoTitle = 'ABC Employee Help';
  demoSearchPlaceholder = 'What do you need help with?';
  categories = [
    {
      "id": 0,
      "name": "Category 1",
      "selected": false,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    },{
      "id": 1,
      "name": "Category 2",
      "selected": false,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    },{
      "id": 2,
      "name": "Category 3",
      "selected": false,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    },{
      "id": 3,
      "name": "Category 4",
      "selected": false,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    },{
      "id": 4,
      "name": "Category 5",
      "selected": true,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    },{
      "id": 5,
      "name": "Category 6",
      "selected": false,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    },{
      "id": 6,
      "name": "Category 7",
      "selected": false,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    },{
      "id": 7,
      "name": "Category 8",
      "selected": false,
      "questions": [
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        },
        {
          "title": "Question Title",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem dolor, tristique ac elementum ut, volutpat sed arcu. Morbi efficitur nibh ut augue porta, in vehicula massa fringilla. Morbi non mauris semper, luctus nibh vitae, dapibus metus. Aenean nec tristique dui."
        }
      ]
    }
  ];
  selectedCategory = this.categories[0];
  selectCategory = function($event, category) {
    this.selectedCategory = category;
  };
  selectMobile = function(category) {
    this.selectedCategory = category;
  };
  selfHelpSteps = [
    {
      "title": "Step 1",
      "completed": false
    },
    {
      "title": "Step 2",
      "completed": false
    },
    {
      "title": "Step 3",
      "completed": false
    },
    {
      "title": "Step 4",
      "completed": false
    },
    {
      "title": "Step 5",
      "completed": false
    },
    {
      "title": "Step 6",
      "completed": false
    }
  ];
  showSteps = false;
  viewSteps = function () {
    this.showSteps = !this.showSteps;
    console.log(this.showSteps);
  };

  constructor() { }

  ngOnInit() {
  }

  completedSteps = function() {
    let count = 0;
    this.selfHelpSteps.forEach(function(item) {
      count += item.completed ? 1 : 0;
    });
    return count;
  };

  completeStep = function(step) {
    step.completed = !step.completed;
  };

}

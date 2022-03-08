export interface IFaq {
    Id: string;
    Title: string;
    Content: string;
    Row:number;
    
  }

//   export class CFaq implements IFaq {
//     Id: string;
//     Title: string;
//     Content: string;
//     FaqCategory: IFaqCategory;
//     FaqCategoryId: string;
  
//     constructor(
//       Id = '',
//       Title = '',
//       Content = '',
//       FaqCategory = new CFaqCategory(),
//       FaqCategoryId = ''
//     ) {
//       this.Id = Id;
//       this.Title = Title;
//       this.Content = Content;
//       this.FaqCategory = FaqCategory;
//       this.FaqCategoryId = FaqCategoryId;
//     }
//   }
  
//   export interface IFaqCategory {
//     Id: string;
//     Title: string;
//   }
  
//   export class CFaqCategory implements IFaqCategory {
//     Id: string;
//     Title: string;
  
//     constructor(Id = '', Title = '') {
//       this.Id = Id;
//       this.Title = Title;
//     }
//   }
  
import { Component } from '@angular/core';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent {
  public ACEdonors = [
     {
      name: 'Founders\' Circle',
      amount: '$10,000+',
      donors: [
        'Bill and Nyda Smith'
      ]
    },
    {
      name: 'Artists\' Circle',
      amount: '$1,000 - 2,499',
      donors: [
        'Ken and Jane Creed',
        'Patricia	Bible',
        'Anonymous'
      ]
    },
    {
      name: 'ACE Benefactors',
      amount: '$500 - 999',
      donors: [
        'Leslie Hull',
        'Penny and Kimbro Lynch',
        'Sue and David Reller',
        'Martha Breazeale',
        'Tammy Prince',
        'Roberta Meyers',
        'Tom and Janet Harper'
      ]
    },
    {
      name: 'ACE Patrons',
      amount: '$250 - 499',
      donors: [
        'Jake and Beth Breazeale',
        'Dennis and Cindy Mullen',
        'Shirley Avery',
        'John Winemiller',
        'Cindy and Stuart Bresee',
        'Robin Turner',
        'Linda and Jim Yates',
        'Lelie and John Testerman'
      ]
    },
    {
      name: 'Friends of ACE',
      amount: '$100 - 249',
      donors: [
        'Mike and Christine Collins',
        'Dwight R. Wade',
        'Teresa and David Debusk',
        'Haley and Patrick Relford',
        'Georgene Wade',
        'Helen Smith',
        'Michael and Betty Copeland',
        'Linda Gouge',
        'Carl and Tricia Ritter'
      ]
    },
    {
      name: 'Sustainers',
      amount: '$50 - 99',
      donors: [
        'Tara Dalton',
        'Lauren Gouge'
      ]
    }
  ];

}

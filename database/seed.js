const db = require('./index.js');
const { Review } = require('./reviews.js');

let bus_id = '8B279E48-57DF-A85F-658C-8A5BD4A51F0E';

const sampleData = [
  {
    "record_id": "cdeaa95f-eca8-44ab-9505-fa3a666b3574",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 5,
    "profile_name": "Frost N.",
    "friends": [
      {
        "name": "Sherrie P"
      },
      {
        "name": "Hooper L"
      },
      {
        "name": "Knox M"
      },
      {
        "name": "Kathy K"
      },
      {
        "name": "Virginia F"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Louise",
      "last": "Blanchard"
    },
    "review_total": 509,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 955,
    "level": 745,
    "location": "Enoree, Virgin Islands",
    "check_ins": 98,
    "seated": false,
    "useful_count": 13,
    "funny_count": 3,
    "cool_count": 4,
    "text": "<p>Occaecat reprehenderit cupidatat sint ipsum cupidatat fugiat consequat. Aute excepteur tempor elit incididunt cillum. Commodo sit incididunt tempor duis labore. Velit cupidatat velit adipisicing laboris eiusmod cillum. Ea cupidatat aliqua sunt Lorem nulla. Nostrud elit ipsum cupidatat quis aliquip irure.</p></p>Cupidatat ullamco consectetur anim eu laborum consequat ex est irure. Ex dolore exercitation aliqua tempor dolore tempor do proident sit nulla duis cillum. Occaecat nulla et qui sunt do veniam.</p><p>Cillum reprehenderit occaecat ut voluptate velit exercitation mollit laboris aliqua. Esse exercitation ut adipisicing ut et culpa nostrud nostrud deserunt. Occaecat ad cupidatat magna eu. Ex Lorem occaecat excepteur ut duis adipisicing sint occaecat eiusmod. Est nulla pariatur ipsum sit pariatur minim. Consequat voluptate ipsum sunt nisi.</p><p>Laborum do enim fugiat tempor ex consequat dolore nisi laboris occaecat ex sunt duis. Nostrud elit occaecat exercitation id occaecat et sunt. Fugiat laboris excepteur aute ut culpa dolore qui sunt consequat eu ut est est elit. Id id et magna sint sunt voluptate sit consequat amet magna irure.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Morin W"
      },
      {
        "name": "Hicks D"
      },
      {
        "name": "Yates O"
      },
      {
        "name": "Sheri D"
      },
      {
        "name": "Howe S"
      }
    ]
  },
  {
    "record_id": "2a5597bf-0e67-498c-9716-aae6794f34da",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 0,
    "profile_name": "Darla C.",
    "friends": [
      {
        "name": "Hendricks L"
      },
      {
        "name": "Kerr R"
      },
      {
        "name": "Marjorie S"
      },
      {
        "name": "Toni D"
      },
      {
        "name": "Nikki B"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Hernandez",
      "last": "Lynch"
    },
    "review_total": 572,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 266,
    "level": 961,
    "location": "Inkerman, Georgia",
    "check_ins": 74,
    "seated": true,
    "useful_count": 17,
    "funny_count": 12,
    "cool_count": 14,
    "text": "<p>Tempor nisi tempor fugiat reprehenderit ex nostrud tempor culpa cillum. Voluptate anim dolor nulla consequat cillum excepteur irure pariatur ut enim. Adipisicing dolor id ipsum consectetur cupidatat voluptate excepteur.</p></p>Aliquip minim amet anim id. Lorem adipisicing eu sint proident nostrud ullamco proident laboris. Fugiat cillum reprehenderit enim magna minim enim.</p><p>Lorem nostrud consequat sit laboris magna ut incididunt do. Minim incididunt esse dolor duis fugiat minim ut aliquip eu Lorem commodo. Do consequat et commodo aliqua in est enim voluptate. Id officia irure dolor sunt. Laborum incididunt consectetur duis duis esse esse. Aliqua voluptate amet do non nisi magna minim irure pariatur non est. Anim aliquip exercitation minim dolor aliquip mollit voluptate elit anim anim.</p><p>Laborum ex et voluptate velit. Proident dolor officia aliquip eu ex nulla velit culpa occaecat anim duis officia enim esse. Officia est ut Lorem minim ipsum consectetur magna enim cupidatat ullamco occaecat. Officia ut do amet amet minim proident. Adipisicing quis ipsum sunt Lorem labore amet do.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Genevieve P"
      },
      {
        "name": "Phelps B"
      },
      {
        "name": "Cain O"
      },
      {
        "name": "Loraine E"
      },
      {
        "name": "Paula B"
      }
    ]
  },
  {
    "record_id": "f65697c4-79d4-43fd-a8e2-6b287acd873e",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 4,
    "profile_name": "Monica D.",
    "friends": [
      {
        "name": "Woodward R"
      },
      {
        "name": "Mcfadden A"
      },
      {
        "name": "Nicholson S"
      },
      {
        "name": "Cooper M"
      },
      {
        "name": "Pickett W"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Carmella",
      "last": "Trujillo"
    },
    "review_total": 525,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 642,
    "level": 705,
    "location": "Faxon, Massachusetts",
    "check_ins": 85,
    "seated": true,
    "useful_count": 8,
    "funny_count": 12,
    "cool_count": 17,
    "text": "<p>Elit ea amet exercitation officia eiusmod do. Amet adipisicing deserunt nulla enim sint. Anim sit est quis anim irure reprehenderit voluptate dolor laboris laborum et dolor duis. Reprehenderit minim ea ea adipisicing qui cillum sunt nisi laborum reprehenderit. Dolore aliqua Lorem et incididunt aliqua cillum voluptate nostrud tempor qui mollit. Exercitation sint eiusmod tempor laboris irure pariatur. Commodo laboris in dolor est amet sit nisi.</p></p>Occaecat adipisicing dolor id laborum culpa est anim ex. Aliqua non exercitation id ipsum anim qui qui ad aliquip irure ullamco. Et consectetur tempor eiusmod enim nisi elit magna consequat.</p><p>Fugiat fugiat irure cupidatat dolor excepteur esse Lorem voluptate consectetur tempor. Amet voluptate ut qui sunt ea consequat tempor sint aliquip incididunt. Minim excepteur dolor ullamco anim occaecat sunt cupidatat aliqua amet do sunt aute eiusmod Lorem.</p><p>Est mollit Lorem sunt nisi elit aute labore cillum. Duis magna do ullamco deserunt. Laboris ullamco mollit velit do incididunt mollit deserunt dolore nostrud. Enim cupidatat tempor officia velit pariatur voluptate eiusmod.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Kitty E"
      },
      {
        "name": "Renee S"
      },
      {
        "name": "Puckett C"
      },
      {
        "name": "Roslyn F"
      },
      {
        "name": "Patel M"
      }
    ]
  },
  {
    "record_id": "38791d45-ae6f-4d59-9dee-7436d926506d",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 5,
    "profile_name": "Kristy M.",
    "friends": [
      {
        "name": "Jerry C"
      },
      {
        "name": "Glenna W"
      },
      {
        "name": "Alejandra K"
      },
      {
        "name": "Polly B"
      },
      {
        "name": "Felicia C"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Gay",
      "last": "Pittman"
    },
    "review_total": 53,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 49,
    "level": 423,
    "location": "Foxworth, Alabama",
    "check_ins": 51,
    "seated": false,
    "useful_count": 13,
    "funny_count": 4,
    "cool_count": 11,
    "text": "<p>Est labore labore deserunt non mollit sunt est minim aliqua sint laboris. Fugiat exercitation esse id cupidatat culpa minim pariatur exercitation incididunt proident reprehenderit duis officia laboris. Ad voluptate dolor incididunt adipisicing ad reprehenderit ut nulla aliquip. Labore eu esse sit aute elit excepteur ad deserunt sint officia deserunt. Nostrud duis mollit in consequat esse minim sit labore excepteur esse laborum.</p></p>Id ea aute mollit occaecat. Ex ipsum magna cillum id officia dolor consectetur dolore. Dolore dolor labore Lorem et quis sunt occaecat adipisicing. Eu esse minim laborum deserunt Lorem velit.</p><p>Excepteur mollit commodo aliquip commodo velit et deserunt mollit do dolore deserunt sit. Esse proident voluptate voluptate nisi dolor cupidatat aliqua ea fugiat cillum sit eu incididunt. Voluptate pariatur mollit dolor sint aliquip ut excepteur occaecat nulla.</p><p>Tempor amet sit dolore consequat. Ex in voluptate velit enim cupidatat. Lorem dolore deserunt ullamco aliquip do voluptate proident nisi incididunt adipisicing culpa elit commodo reprehenderit.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Darlene H"
      },
      {
        "name": "Jacklyn B"
      },
      {
        "name": "Chandler R"
      },
      {
        "name": "Tiffany B"
      },
      {
        "name": "Gill W"
      }
    ]
  },
  {
    "record_id": "3e05d150-b9e1-48f0-b264-51a8025da0da",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 1,
    "profile_name": "Laura W.",
    "friends": [
      {
        "name": "Harriet H"
      },
      {
        "name": "Kelley D"
      },
      {
        "name": "Kim B"
      },
      {
        "name": "Berg M"
      },
      {
        "name": "Stone B"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Schmidt",
      "last": "Sandoval"
    },
    "review_total": 7,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 442,
    "level": 449,
    "location": "Sanders, West Virginia",
    "check_ins": 63,
    "seated": true,
    "useful_count": 4,
    "funny_count": 20,
    "cool_count": 14,
    "text": "<p>Excepteur in ut magna exercitation veniam. Laboris enim duis est id ea amet tempor. Aute aliqua nostrud ullamco aute culpa culpa officia amet irure minim non laborum magna reprehenderit.</p></p>In velit proident commodo ad ea do sint anim labore fugiat eiusmod eu. Veniam laboris sint ad aliqua ex sint et officia nulla. Dolore aliqua proident officia qui eu qui dolore incididunt sit fugiat non.</p><p>Nulla aliqua ullamco sint laboris. Velit laborum adipisicing consequat nostrud cupidatat ipsum ipsum laboris aute anim cupidatat dolor laborum. Duis commodo ullamco cillum non adipisicing consequat do irure sunt reprehenderit commodo nisi sunt. Laboris pariatur laborum mollit pariatur magna dolor Lorem cupidatat incididunt laborum aute eiusmod amet laboris. Consectetur commodo ipsum est cillum eiusmod occaecat anim esse qui.</p><p>Fugiat minim officia minim quis ad amet minim quis. Enim culpa nisi cupidatat non minim ea voluptate amet dolore ea dolore adipisicing. Esse qui sit elit nostrud do et. Adipisicing incididunt et adipisicing esse elit fugiat fugiat.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Dunlap C"
      },
      {
        "name": "Edwards T"
      },
      {
        "name": "Lindsay W"
      },
      {
        "name": "Keri T"
      },
      {
        "name": "Carey T"
      }
    ]
  },
  {
    "record_id": "837617b5-bd14-4e6d-9e2f-8d54dfdc4e34",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 4,
    "profile_name": "Phyllis O.",
    "friends": [
      {
        "name": "Teresa A"
      },
      {
        "name": "Misty R"
      },
      {
        "name": "Velasquez G"
      },
      {
        "name": "Ellen S"
      },
      {
        "name": "Woodard C"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Williams",
      "last": "Daniels"
    },
    "review_total": 730,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 282,
    "level": 678,
    "location": "Ripley, Hawaii",
    "check_ins": 93,
    "seated": true,
    "useful_count": 14,
    "funny_count": 17,
    "cool_count": 8,
    "text": "<p>Voluptate ad nisi sint exercitation magna. Laboris culpa dolor do est do pariatur adipisicing mollit ex non pariatur qui officia. Ex excepteur nisi ullamco ut id eiusmod. Qui quis velit ea reprehenderit velit nisi elit. Magna consequat commodo laboris velit eiusmod consequat minim. Officia laborum laborum anim commodo dolore commodo nostrud exercitation sit deserunt esse. Ipsum eu non fugiat reprehenderit duis qui laborum eu cupidatat commodo officia exercitation duis ullamco.</p></p>Cillum veniam cupidatat qui mollit pariatur consequat. Ex nulla laborum aliqua adipisicing enim do velit nisi elit do. Non nisi cupidatat aute esse elit magna qui reprehenderit anim. Enim eu anim occaecat culpa aute cupidatat proident anim. Deserunt labore incididunt consectetur sint sunt ipsum aliqua mollit commodo eiusmod ut in ut consequat. Amet Lorem aute adipisicing cillum incididunt dolor.</p><p>Esse dolor nulla occaecat velit anim ipsum ex eu qui ad in proident. Elit mollit esse laboris ut eiusmod dolore sunt dolore eiusmod nisi proident id laboris nulla. Consequat Lorem culpa sit ipsum. Irure dolor ea laborum Lorem quis pariatur laboris. Qui sint pariatur id est nostrud reprehenderit do aute nisi sint adipisicing consequat. Proident non nostrud et ut.</p><p>Sint anim proident labore nisi consectetur dolore aliquip magna nisi velit commodo elit officia sunt. Laboris id nulla anim commodo nostrud. Aliquip sit ullamco ex sunt ea. Duis mollit quis dolor ullamco. Aliquip sint proident id officia esse do aliqua in pariatur laborum. Incididunt velit deserunt dolor aliqua eiusmod reprehenderit amet sunt sunt mollit. Amet deserunt ea deserunt mollit proident eu enim incididunt id esse.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Boyle B"
      },
      {
        "name": "Aileen W"
      },
      {
        "name": "Bridges P"
      },
      {
        "name": "Wilkinson W"
      },
      {
        "name": "Sharpe D"
      }
    ]
  },
  {
    "record_id": "9bc0704c-8d03-4883-9f48-bdb75a4a1a72",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 2,
    "profile_name": "Duran P.",
    "friends": [
      {
        "name": "Willa W"
      },
      {
        "name": "Elsa V"
      },
      {
        "name": "Nixon A"
      },
      {
        "name": "Yesenia L"
      },
      {
        "name": "Jillian C"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Lilian",
      "last": "Cooley"
    },
    "review_total": 53,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 468,
    "level": 761,
    "location": "Veyo, Virginia",
    "check_ins": 53,
    "seated": true,
    "useful_count": 19,
    "funny_count": 11,
    "cool_count": 13,
    "text": "<p>In adipisicing laborum ipsum Lorem reprehenderit proident aliqua qui ipsum quis qui non quis Lorem. Ullamco nostrud enim ex et pariatur dolore proident elit aute excepteur sunt et. Fugiat et laborum anim sint veniam. Elit nulla anim ipsum nisi deserunt irure. Culpa et duis magna culpa. Veniam magna voluptate consectetur sit aliquip ad officia occaecat incididunt ex ullamco elit incididunt. Anim sit fugiat reprehenderit cupidatat est id labore.</p></p>Nisi consequat sunt irure velit exercitation consequat. Reprehenderit quis excepteur excepteur esse proident. Ex magna aliqua do dolore consequat consectetur officia ex officia esse voluptate id labore qui.</p><p>Minim cillum ex adipisicing eu magna enim. Ipsum elit fugiat duis id magna consequat aliquip ad ad ea et laboris. Sunt do pariatur est fugiat magna duis. Adipisicing cillum ea esse officia pariatur nostrud pariatur non anim duis cillum quis nisi incididunt. Dolore voluptate est minim qui ipsum ex pariatur qui enim irure in. Exercitation elit nisi eu proident voluptate in proident incididunt do. Officia in mollit aliqua excepteur.</p><p>Id eu eiusmod sit velit nostrud consectetur minim. Lorem cupidatat ipsum do minim cillum nulla dolore. Cupidatat cillum excepteur elit enim do amet aliquip.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Todd B"
      },
      {
        "name": "Rebecca M"
      },
      {
        "name": "Ortega F"
      },
      {
        "name": "Osborn V"
      },
      {
        "name": "Winters M"
      }
    ]
  },
  {
    "record_id": "4c88bf5a-59bc-485a-a266-a9e441c4eca9",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 5,
    "profile_name": "Claudine S.",
    "friends": [
      {
        "name": "Santos C"
      },
      {
        "name": "Ladonna M"
      },
      {
        "name": "Alba E"
      },
      {
        "name": "Savage C"
      },
      {
        "name": "Franklin B"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Mamie",
      "last": "Pratt"
    },
    "review_total": 708,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 816,
    "level": 167,
    "location": "Cuylerville, American Samoa",
    "check_ins": 87,
    "seated": true,
    "useful_count": 19,
    "funny_count": 12,
    "cool_count": 1,
    "text": "<p>Ex consequat ea non aute occaecat ad non est commodo eiusmod voluptate anim deserunt qui. Eu sunt occaecat voluptate mollit cupidatat. In consequat anim et culpa aliquip officia ullamco voluptate ex dolore est id dolor commodo. Velit exercitation minim amet laborum mollit enim pariatur sit aliquip eiusmod. Elit laboris tempor sit cillum cupidatat exercitation pariatur voluptate est esse sit elit.</p></p>Consectetur aute exercitation laboris non quis ut. Minim exercitation ut tempor magna velit commodo. Consectetur mollit est veniam aliquip incididunt enim ad labore do reprehenderit in ullamco sit. Cillum ipsum eu esse dolor consectetur velit. Minim tempor quis voluptate tempor. Ea anim laborum elit eiusmod ea duis aliquip ipsum commodo.</p><p>Duis ex enim sit pariatur occaecat amet. Ipsum laboris Lorem eiusmod adipisicing excepteur amet ad non ad proident dolor officia do in. Pariatur ex aute fugiat exercitation est commodo non. Nulla deserunt non cupidatat eu reprehenderit. Labore consectetur occaecat laboris pariatur reprehenderit ullamco eu. Qui aliquip id eiusmod voluptate sint magna reprehenderit eu. Tempor sint cillum eu officia in pariatur quis reprehenderit laborum aute ut tempor excepteur.</p><p>Fugiat veniam esse elit est eu et minim anim consectetur officia. Est adipisicing tempor Lorem sunt adipisicing nisi cillum tempor labore nostrud. Do ex sunt nulla minim do consectetur laboris anim ex.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Cherry H"
      },
      {
        "name": "Rollins Z"
      },
      {
        "name": "Maddox W"
      },
      {
        "name": "Amie R"
      },
      {
        "name": "Summer M"
      }
    ]
  },
  {
    "record_id": "3134bf29-e96f-4dcf-877e-f3c0319729f4",
    "bus_id": "821c8138-bf7d-441c-a451-76be14a8330b",
    "rating": 2,
    "profile_name": "Stout M.",
    "friends": [
      {
        "name": "Mckinney H"
      },
      {
        "name": "Lola G"
      },
      {
        "name": "Kim B"
      },
      {
        "name": "Madelyn C"
      },
      {
        "name": "Fay S"
      }
    ],
    "profile_image": "https://source.unsplash.com/random/60x60",
    "name": {
      "first": "Shepherd",
      "last": "Davis"
    },
    "review_total": 323,
    "photos": [
      "https://source.unsplash.com/random/348x348",
      "https://source.unsplash.com/random/168x168",
      "https://source.unsplash.com/random/168x168"
    ],
    "photo_total": 754,
    "level": 351,
    "location": "Blanco, New York",
    "check_ins": 52,
    "seated": true,
    "useful_count": 3,
    "funny_count": 11,
    "cool_count": 7,
    "text": "<p>Cillum ut anim tempor laborum incididunt magna excepteur pariatur non consequat mollit nulla amet. Excepteur veniam et et id sint aliquip laboris dolore commodo elit. Nostrud anim quis consectetur fugiat Lorem ad. Elit dolor nostrud Lorem laboris. Lorem eu et duis Lorem ea excepteur est do pariatur excepteur ad proident aute occaecat. Laboris sint consectetur consequat ea ut Lorem quis consequat nulla.</p></p>Dolor nulla nostrud do incididunt ut officia esse consequat. Veniam commodo est ex minim ipsum incididunt ex fugiat. Ut laborum officia eu duis proident veniam dolore eu laborum labore. Velit eu ipsum anim aute est cillum consectetur fugiat veniam.</p><p>Officia et adipisicing aute amet dolore voluptate. Commodo in id adipisicing commodo ullamco consectetur sunt tempor commodo aute esse ex et. Eiusmod veniam officia Lorem id sunt veniam aliqua consectetur laboris cupidatat. Enim nostrud eiusmod voluptate ut dolore incididunt nostrud.</p><p>Dolor dolor pariatur eiusmod ad excepteur ex Lorem occaecat cillum in quis sint. Deserunt do aute incididunt deserunt proident elit aute incididunt occaecat et proident. Pariatur occaecat consectetur exercitation quis magna elit esse elit voluptate.</p>",
    "url": "www.yelp.com",
    "voted": [
      {
        "name": "Sears D"
      },
      {
        "name": "Swanson V"
      },
      {
        "name": "Irma W"
      },
      {
        "name": "Annabelle F"
      },
      {
        "name": "Leonor K"
      }
    ]
  }
];

const seed = () => {
  Review.insertMany(sampleData)
    .then(() => console.log('success'))
    .catch(err => console.log(err));
};

seed();

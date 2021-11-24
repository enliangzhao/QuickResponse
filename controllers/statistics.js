class StatController {
  static async getStat(req, res) {
    //   const { content } = req.body;
    const { content } = req.body;
    console.log(req.body.month);
    //   const author = req.user.username;
    var arr = [];
    if (req.body.location == "Los Angeles" && req.body.type == "Robbery") {
      for (const element of LosRobbery) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }
    }
    if (req.body.location == "Los Angeles" && req.body.type == "Violence") {
      for (const element of LosViolence) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }
    }
    if (req.body.location == "Los Angeles" && req.body.type == "Sexual") {
      for (const element of LosSexual) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }
    }
    if (req.body.location == "Miami" && req.body.type == "Robbery") {
      for (const element of MiamiRobbery) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }

    }
    if (req.body.location == "Miami" && req.body.type == "Violence") {
      for (const element of MiamiViolence) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }

    }
    if (req.body.location == "Miami" && req.body.type == "Sexual") {
      for (const element of MiamiSexual) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }
    }
    if (req.body.location == "New York" && req.body.type == "Robbery") {
      for (const element of NYRobbery) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }

    }
    if (req.body.location == "New York" && req.body.type == "Violence") {
      for (const element of NYViolence) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }

    }
    if (req.body.location == "New York" && req.body.type == "Sexual") {
      for (const element of NYSexual) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }
    }
    if (req.body.location == "mtv" && req.body.type == "Robbery") {
      for (const element of BayRobbery) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }
    }
    if (req.body.location == "mtv" && req.body.type == "Violence") {
      for (const element of BayViolence) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }

    }
    if (req.body.location == "mtv" && req.body.type == "Sexual") {
      for (const element of BaySexual) {
        if (element.month == req.body.month) {
          console.log(element);
          arr.push(element);
        }
      }
    }
    res.status(200).send(arr);
  }
  static async getAllStat(req, res) {
    //   const { content } = req.body;
    const { content } = req.body;
    console.log(req.body.month);
    //   const author = req.user.username;
    var arr = [];
    if (req.body.location == "Los Angeles" && req.body.type == "Robbery") {

      res.status(200).send(LosRobbery);

    }
    if (req.body.location == "Los Angeles" && req.body.type == "Violence") {
      res.status(200).send(LosViolence);

    }
    if (req.body.location == "Los Angeles" && req.body.type == "Sexual") {
      res.status(200).send(LosSexual);
    }
    if (req.body.location == "Miami" && req.body.type == "Robbery") {

      res.status(200).send(MiamiRobbery);

    }
    if (req.body.location == "Miami" && req.body.type == "Violence") {
      res.status(200).send(MiamiViolence);

    }
    if (req.body.location == "Miami" && req.body.type == "Sexual") {
      res.status(200).send(MiamiSexual);
    }
    if (req.body.location == "New York" && req.body.type == "Robbery") {

      res.status(200).send(NYRobbery);

    }
    if (req.body.location == "New York" && req.body.type == "Violence") {
      res.status(200).send(NYViolence);

    }
    if (req.body.location == "New York" && req.body.type == "Sexual") {
      res.status(200).send(NYSexual);
    }
    if (req.body.location == "mtv" && req.body.type == "Robbery") {

      res.status(200).send(BayRobbery);

    }
    if (req.body.location == "mtv" && req.body.type == "Violence") {
      res.status(200).send(BayViolence);

    }
    if (req.body.location == "mtv" && req.body.type == "Sexual") {
      res.status(200).send(BaySexual);
    }
  }
}
const LosRobbery = [
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '201',
    month: '2021-01',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '250',
    month: '2021-02',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '320',
    month: '2021-03',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '270',
    month: '2021-04',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '289',
    month: '2021-05',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '267',
    month: '2021-06',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '240',
    month: '2021-07',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '259',
    month: '2021-08',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '234',
    month: '2021-09',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '350',
    month: '2021-10',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Robbery',
    case: '370',
    month: '2021-11',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '70',
    month: '2021-01',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '66',
    month: '2021-02',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '80',
    month: '2021-03',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '55',
    month: '2021-04',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '60',
    month: '2021-05',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '80',
    month: '2021-06',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '40',
    month: '2021-07',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '55',
    month: '2021-08',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '60',
    month: '2021-09',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '81',
    month: '2021-10',
  },
  {
    location: 'Hollywood',
    type: 'Robbery',
    case: '90',
    month: '2021-11',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '11',
    month: '2021-01',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '15',
    month: '2021-02',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '8',
    month: '2021-03',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '13',
    month: '2021-04',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '7',
    month: '2021-05',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '10',
    month: '2021-06',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '12',
    month: '2021-07',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '15',
    month: '2021-08',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '11',
    month: '2021-09',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '10',
    month: '2021-10',
  },
  {
    location: 'Santa Monica',
    type: 'Robbery',
    case: '16',
    month: '2021-11',
  }];


const LosViolence = [
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '190',
    month: '2021-01',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '189',
    month: '2021-02',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '165',
    month: '2021-03',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '144',
    month: '2021-04',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '121',
    month: '2021-05',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '177',
    month: '2021-06',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '185',
    month: '2021-07',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '204',
    month: '2021-08',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '240',
    month: '2021-09',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '230',
    month: '2021-10',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Violence',
    case: '250',
    month: '2021-11',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '58',
    month: '2021-01',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '44',
    month: '2021-02',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '46',
    month: '2021-03',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '54',
    month: '2021-04',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '34',
    month: '2021-05',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '41',
    month: '2021-06',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '54',
    month: '2021-07',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '51',
    month: '2021-08',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '60',
    month: '2021-09',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '79',
    month: '2021-10',
  },
  {
    location: 'Hollywood',
    type: 'Violence',
    case: '90',
    month: '2021-11',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '8',
    month: '2021-01',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '5',
    month: '2021-02',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '9',
    month: '2021-03',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '13',
    month: '2021-04',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '7',
    month: '2021-05',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '7',
    month: '2021-06',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '14',
    month: '2021-07',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '12',
    month: '2021-08',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '11',
    month: '2021-09',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '12',
    month: '2021-10',
  },
  {
    location: 'Santa Monica',
    type: 'Violence',
    case: '19',
    month: '2021-11',
  }];

const LosSexual = [
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '30',
    month: '2021-01',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '28',
    month: '2021-02',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '25',
    month: '2021-03',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '26',
    month: '2021-04',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '16',
    month: '2021-05',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '20',
    month: '2021-06',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '21',
    month: '2021-07',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '17',
    month: '2021-08',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '18',
    month: '2021-09',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '29',
    month: '2021-10',
  },
  {
    location: 'Los Angeles Downtown',
    type: 'Sexual Harassment',
    case: '30',
    month: '2021-11',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-01',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '6',
    month: '2021-02',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-03',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-04',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-05',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-06',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '6',
    month: '2021-07',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-08',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-09',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-10',
  },
  {
    location: 'Hollywood',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-11',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-01',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '0',
    month: '2021-02',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-03',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-04',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-05',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-06',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-07',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-08',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '0',
    month: '2021-09',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-10',
  },
  {
    location: 'Santa Monica',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-11',
  }];



const MiamiRobbery = [
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '150',
    month: '2021-01',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '153',
    month: '2021-02',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '231',
    month: '2021-03',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '211',
    month: '2021-04',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '178',
    month: '2021-05',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '189',
    month: '2021-06',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '213',
    month: '2021-07',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '190',
    month: '2021-08',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '209',
    month: '2021-09',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '211',
    month: '2021-10',
  },
  {
    location: 'Miami Downtown',
    type: 'Robbery',
    case: '240',
    month: '2021-11',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '70',
    month: '2021-01',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '69',
    month: '2021-02',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '80',
    month: '2021-03',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '75',
    month: '2021-04',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '61',
    month: '2021-05',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '81',
    month: '2021-06',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '41',
    month: '2021-07',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '53',
    month: '2021-08',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '61',
    month: '2021-09',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '82',
    month: '2021-10',
  },
  {
    location: 'Hialeah',
    type: 'Robbery',
    case: '91',
    month: '2021-11',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '19',
    month: '2021-01',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '16',
    month: '2021-02',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '19',
    month: '2021-03',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '14',
    month: '2021-04',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '14',
    month: '2021-05',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '18',
    month: '2021-06',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '12',
    month: '2021-07',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '15',
    month: '2021-08',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '11',
    month: '2021-09',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '11',
    month: '2021-10',
  },
  {
    location: 'Aventura',
    type: 'Robbery',
    case: '14',
    month: '2021-11',
  }];

const MiamiViolence = [
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '191',
    month: '2021-01',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '176',
    month: '2021-02',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '161',
    month: '2021-03',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '141',
    month: '2021-04',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '124',
    month: '2021-05',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '171',
    month: '2021-06',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '181',
    month: '2021-07',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '204',
    month: '2021-08',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '245',
    month: '2021-09',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '232',
    month: '2021-10',
  },
  {
    location: 'Miami Downtown',
    type: 'Violence',
    case: '255',
    month: '2021-11',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '57',
    month: '2021-01',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '49',
    month: '2021-02',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '45',
    month: '2021-03',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '34',
    month: '2021-04',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '76',
    month: '2021-05',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '53',
    month: '2021-06',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '87',
    month: '2021-07',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '66',
    month: '2021-08',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '54',
    month: '2021-09',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '34',
    month: '2021-10',
  },
  {
    location: 'Hialeah',
    type: 'Violence',
    case: '67',
    month: '2021-11',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '6',
    month: '2021-01',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '9',
    month: '2021-02',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '6',
    month: '2021-03',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '11',
    month: '2021-04',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '7',
    month: '2021-05',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '9',
    month: '2021-06',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '20',
    month: '2021-07',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '15',
    month: '2021-08',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '16',
    month: '2021-09',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '18',
    month: '2021-10',
  },
  {
    location: 'Aventura',
    type: 'Violence',
    case: '30',
    month: '2021-11',
  }];

const MiamiSexual = [
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '20',
    month: '2021-01',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '39',
    month: '2021-02',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '44',
    month: '2021-03',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '34',
    month: '2021-04',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '23',
    month: '2021-05',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '25',
    month: '2021-06',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '27',
    month: '2021-07',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '34',
    month: '2021-08',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '45',
    month: '2021-09',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '34',
    month: '2021-10',
  },
  {
    location: 'Miami Downtown',
    type: 'Sexual Harassment',
    case: '44',
    month: '2021-11',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-01',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '7',
    month: '2021-02',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-03',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '7',
    month: '2021-04',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '17',
    month: '2021-05',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-06',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '6',
    month: '2021-07',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-08',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-09',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-10',
  },
  {
    location: 'Hialeah',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-11',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-01',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-02',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-03',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-04',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-05',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-06',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '0',
    month: '2021-07',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-08',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-09',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-10',
  },
  {
    location: 'Aventura',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-11',
  }];

const NYRobbery = [
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '240',
    month: '2021-01',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '231',
    month: '2021-02',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '247',
    month: '2021-03',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '291',
    month: '2021-04',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '345',
    month: '2021-05',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '310',
    month: '2021-06',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '301',
    month: '2021-07',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '320',
    month: '2021-08',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '290',
    month: '2021-09',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '360',
    month: '2021-10',
  },
  {
    location: 'Brooklyn',
    type: 'Robbery',
    case: '391',
    month: '2021-11',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '150',
    month: '2021-01',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '120',
    month: '2021-02',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '140',
    month: '2021-03',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '130',
    month: '2021-04',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '123',
    month: '2021-05',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '155',
    month: '2021-06',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '132',
    month: '2021-07',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '122',
    month: '2021-08',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '143',
    month: '2021-09',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '155',
    month: '2021-10',
  },
  {
    location: 'Manhattan',
    type: 'Robbery',
    case: '160',
    month: '2021-11',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '70',
    month: '2021-01',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '80',
    month: '2021-02',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '85',
    month: '2021-03',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '78',
    month: '2021-04',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '76',
    month: '2021-05',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '89',
    month: '2021-06',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '90',
    month: '2021-07',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '78',
    month: '2021-08',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '98',
    month: '2021-09',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '76',
    month: '2021-10',
  },
  {
    location: 'Queens',
    type: 'Robbery',
    case: '80',
    month: '2021-11',
  }];


const NYViolence = [
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '180',
    month: '2021-01',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '190',
    month: '2021-02',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '200',
    month: '2021-03',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '201',
    month: '2021-04',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '180',
    month: '2021-05',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '177',
    month: '2021-06',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '185',
    month: '2021-07',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '204',
    month: '2021-08',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '222',
    month: '2021-09',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '212',
    month: '2021-10',
  },
  {
    location: 'Brooklyn',
    type: 'Violence',
    case: '230',
    month: '2021-11',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '40',
    month: '2021-01',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '33',
    month: '2021-02',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '45',
    month: '2021-03',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '66',
    month: '2021-04',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '21',
    month: '2021-05',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '44',
    month: '2021-06',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '54',
    month: '2021-07',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '43',
    month: '2021-08',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '55',
    month: '2021-09',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '79',
    month: '2021-10',
  },
  {
    location: 'Manhattan',
    type: 'Violence',
    case: '90',
    month: '2021-11',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '22',
    month: '2021-01',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '23',
    month: '2021-02',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '33',
    month: '2021-03',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '25',
    month: '2021-04',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '29',
    month: '2021-05',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '27',
    month: '2021-06',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '25',
    month: '2021-07',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '33',
    month: '2021-08',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '21',
    month: '2021-09',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '34',
    month: '2021-10',
  },
  {
    location: 'Queens',
    type: 'Violence',
    case: '19',
    month: '2021-11',
  }];

const NYSexual = [
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '30',
    month: '2021-01',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '44',
    month: '2021-02',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '25',
    month: '2021-03',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '33',
    month: '2021-04',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '16',
    month: '2021-05',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '35',
    month: '2021-06',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '24',
    month: '2021-07',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '17',
    month: '2021-08',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '22',
    month: '2021-09',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '29',
    month: '2021-10',
  },
  {
    location: 'Brooklyn',
    type: 'Sexual Harassment',
    case: '20',
    month: '2021-11',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '7',
    month: '2021-01',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '9',
    month: '2021-02',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '9',
    month: '2021-03',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-04',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-05',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-06',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '6',
    month: '2021-07',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-08',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-09',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-10',
  },
  {
    location: 'Manhattan',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-11',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-01',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-02',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-03',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-04',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-05',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '7',
    month: '2021-06',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-07',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-08',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-09',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-10',
  },
  {
    location: 'Queens',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-11',
  }];
const BayRobbery = [
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '10',
    month: '2021-01',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '8',
    month: '2021-02',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '9',
    month: '2021-03',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '8',
    month: '2021-04',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '6',
    month: '2021-05',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '8',
    month: '2021-06',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '7',
    month: '2021-07',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '8',
    month: '2021-08',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '8',
    month: '2021-09',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '7',
    month: '2021-10',
  },
  {
    location: 'Mountain View',
    type: 'Robbery',
    case: '8',
    month: '2021-11',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '7',
    month: '2021-01',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '8',
    month: '2021-02',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '7',
    month: '2021-03',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '8',
    month: '2021-04',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '4',
    month: '2021-05',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '4',
    month: '2021-06',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '3',
    month: '2021-07',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '5',
    month: '2021-08',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '8',
    month: '2021-09',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '9',
    month: '2021-10',
  },
  {
    location: 'Sunnyvale',
    type: 'Robbery',
    case: '10',
    month: '2021-11',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '20',
    month: '2021-01',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '30',
    month: '2021-02',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '24',
    month: '2021-03',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '25',
    month: '2021-04',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '26',
    month: '2021-05',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '23',
    month: '2021-06',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '30',
    month: '2021-07',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '21',
    month: '2021-08',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '25',
    month: '2021-09',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '21',
    month: '2021-10',
  },
  {
    location: 'San Jose',
    type: 'Robbery',
    case: '25',
    month: '2021-11',
  }];


const BayViolence = [
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '5',
    month: '2021-01',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '7',
    month: '2021-02',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '6',
    month: '2021-03',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '5',
    month: '2021-04',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '7',
    month: '2021-05',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '8',
    month: '2021-06',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '7',
    month: '2021-07',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '9',
    month: '2021-08',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '8',
    month: '2021-09',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '9',
    month: '2021-10',
  },
  {
    location: 'Mountain View',
    type: 'Violence',
    case: '5',
    month: '2021-11',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '9',
    month: '2021-01',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '11',
    month: '2021-02',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '8',
    month: '2021-03',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '4',
    month: '2021-04',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '15',
    month: '2021-05',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '4',
    month: '2021-06',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '21',
    month: '2021-07',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '12',
    month: '2021-08',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '3',
    month: '2021-09',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '11',
    month: '2021-10',
  },
  {
    location: 'Sunnyvale',
    type: 'Violence',
    case: '12',
    month: '2021-11',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '22',
    month: '2021-01',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '33',
    month: '2021-02',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '24',
    month: '2021-03',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '25',
    month: '2021-04',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '29',
    month: '2021-05',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '27',
    month: '2021-06',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '25',
    month: '2021-07',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '29',
    month: '2021-08',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '21',
    month: '2021-09',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '31',
    month: '2021-10',
  },
  {
    location: 'San Jose',
    type: 'Violence',
    case: '19',
    month: '2021-11',
  }];

const BaySexual = [
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-01',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-02',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-03',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-04',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-05',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-06',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-07',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-08',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-09',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-10',
  },
  {
    location: 'Mountain View',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-11',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-01',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-02',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-03',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '1',
    month: '2021-04',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '0',
    month: '2021-05',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-06',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '7',
    month: '2021-07',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-08',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '2',
    month: '2021-09',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-10',
  },
  {
    location: 'Sunnyvale',
    type: 'Sexual Harassment',
    case: '6',
    month: '2021-11',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '7',
    month: '2021-01',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '3',
    month: '2021-02',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '4',
    month: '2021-03',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '5',
    month: '2021-04',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '9',
    month: '2021-05',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '9',
    month: '2021-06',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '9',
    month: '2021-07',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '11',
    month: '2021-08',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '14',
    month: '2021-09',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '14',
    month: '2021-10',
  },
  {
    location: 'San Jose',
    type: 'Sexual Harassment',
    case: '15',
    month: '2021-11',
  }];

module.exports = StatController;
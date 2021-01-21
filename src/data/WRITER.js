
const med_centers = [
    {
        name: 'Альфамед',
        fullname: 'Медицинский центр «Альфамед»',
        adress: 'г.Минск, пр-т Независимости, 85',
        history: 'Медицинский центр «Альфамед» — частное унитарное предприятие, открывшее свои двери для пациентов в 2001 году. Медицинский центр оказывает весь спектр медицинских услуг для жителей столицы и гостей Минска, радуя безупречным сервисом и индивидуальным подходом к каждому пациенту.',
        img: 'assets/centers_img/alfamed.jpg',
        logo: 'assets/centers_img/alfamed_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.483303816239!2d27.601679516037336!3d53.923157039049556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf0612974cb9%3A0x1b167de468817508!2z0JDQu9GM0YTQsNC80LXQtA!5e0!3m2!1sru!2sby!4v1610760486018!5m2!1sru!2sby',
        coord: '53.919774, 27.601318',
        phones: ['+375 29 637-00-00', '+375 17 336-45-16'],
        schedule: '08:00—21:00',
        services: {
            'allergology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ], 
            'cardiology': [ 
                {visit_1: 37 }, {visit_2: 30 }, {visit_home: 90 },
             ],
            'cosmetology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ], 
            'dermatology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'endocrinology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'gastroenterology': [ 
                {visit_1: 37 }, {visit_2: 30 },
             ],
            'ginecology': [ 
                {visit_1: 37 }, {visit_2: 30 },
             ],
            'hirurgy': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'lab_diag': [ 
                { serv_1: 20 }, { serv_5: 10 }, { serv_23: 8 }
             ],
            'lor': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'nevrology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'oftalmology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'onkolog': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'pediatry': [ 
                {visit_1: 37 }, {visit_2: 30 }, {visit_home: 60 },
             ],
            'revmatology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'therapy': [ 
                {visit_1: 37 }, {visit_2: 30 }, {visit_home: 75 },
             ],
            'urology': [ 
                {visit_1: 37 }, {visit_2: 30 }
             ],
            'uzi_diagnistic': [
                 {serv_1 : 47 },
                 {serv_2 : 28 },
                 {serv_3 : 30 },
                 {serv_5 : 31},
                 {serv_5 : 20 },
                 {serv_6 : 25 },
                 {serv_7 : 38 },
                 {serv_8 : 20 },
                 {serv_9 : 24 },
                 {serv_10 : 32 },
                 {serv_11 : 27 },
                 {serv_12 : 35 },
                 {serv_13 : 40 },
                 {serv_14 : 45 },
                 {serv_15 : 28 },
                 {serv_16 : 45 } ,
                 {serv_18 : 69 },
                 {serv_20 : 26 },
                 {serv_22 : 47 },
                 {serv_23 : 25 }
                ],
            }
    },
    {
        name: 'Доктор Профи',
        fullname: 'Медицинский центр «Доктор Профи»',
        adress: 'Минск, д. Копище, ул. Лопатина, 7а/2',
        history: 'В медицинском центре работают врачи высокой квалификации, в том числе доценты и профессора. Каждый сотрудник понимает степень ответственности за здоровье пациентов, поэтому стремится выполнить работу добросовестно.',
        img: 'assets/centers_img/doctor_profi.jpg',
        logo: 'assets/centers_img/doctor_profi_logo.jpg',
        coord: '53.953662, 27.678280',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.7619989204054!2d27.67611921603821!3d53.953735036742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc9b653db3a9b%3A0x2071cbea4aedbd58!2zwqvQlNC-0LrRgtC-0YAg0J_RgNC-0YTQuMK7IOKAlCDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGG0LXQvdGC0YAg0LIg0JzQuNC90YHQutC1!5e0!3m2!1sru!2sby!4v1610843408217!5m2!1sru!2sby',
        phones: ['+375 17 270-01-06', '+375 29 323-75-03'],
        schedule: '08:00—21:00',
        services: {
            'dermatology': [ 
                {visit_1: 40 }, {visit_2: 35 }
             ],
            'flebology': [ 
                {visit_1: 20 }, {visit_uzds: 64.80 }
             ],
            'hirurgy': [ 
                {visit_1: 40 }, {visit_2: 35 }, {visit_candidate: 60 }, 
             ],
            'lor': [ 
                {visit_1: 40 }, {visit_2: 30 }
             ],
            'mammology': [ 
                {visit_1: 40 }, {visit_2: 30 }
             ],
            'onkolog': [ 
                {visit_1: 40 }, {visit_2: 30 }
             ],
            'pediatry': [ 
                {visit_1: 40 }, {visit_2: 30 }, 
             ],
            'proctology': [ 
                {visit_1: 40 }, {visit_2: 35 }, 
             ],
            'procedure': [ 
                { serv_1: 14.10 },
                { serv_2: 8.92 },
                { serv_3: 8.80 },
                { serv_4: 21.22 },
                { serv_5: 11.25 },
                { serv_6: 8 },
            ],
            'therapy': [ 
                {visit_1: 40}, {visit_2: 30 },
             ],
            'urology': [ 
                {visit_1: 40 }, {visit_2: 30 }
             ],
            'uzi_diagnistic': [ 
                { serv_1: 40.14 },
                { serv_2: 20.34 },
                { serv_3: 15.21 },
                { serv_4: 25.38 },
                { serv_5: 28.20 },
                { serv_6: 17.64 },
                { serv_7: 43.11 },
                { serv_9: 17.64 },
                { serv_10: 35.37 },
                { serv_11: 17.64 },
                { serv_12: 55.38 },
                { serv_13: 20.34 },
                { serv_15: 27.81 },
                { serv_16: 58.05 },
                { serv_17: 15.21 },
                { serv_18: 55.44 },
                { serv_23: 25.38 },
             ],
            'x-ray_diag': [ 
                { serv_2: 7 },
                { serv_4: 35.7 },
                { serv_7: 54.3 },
             ],
        }
            
    },
    {
        name: 'РКМЦ',
        fullname: 'ГУ «Республиканский клинический медицинский центр» Управления делами Президента Республики Беларусь',
        adress: 'Минский р-н, аг. Ждановичи, 81/5',
        history: '«Республиканский клинический медицинский центр» Управления делами Президента Республики Беларусь является лечебно-профилактическим государственным учреждением. Центр вот уже более 85 лет успешно оказывает медицинскую помощь различного профиля пациентам, внедряя в работу современные методики.',
        img: 'assets/centers_img/rkmc.jpg',
        logo: 'assets/centers_img/rkmc_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.347131882805!2d27.43240401603836!3d53.96110313618582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc690a2923b%3A0xe08ac8a0ef90742c!2z0JPQoyDQoNC10YHQv9GD0LHQu9C40LrQsNC90YHQutC40Lkg0LrQu9C40L3QuNGH0LXRgdC60LjQuSDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGG0LXQvdGC0YAg0KPQv9GA0LDQstC00LXQu9Cw0LzQuCDQn9GA0LXQt9C40LTQtdC90YLQsCDQoNC10YHQv9GD0LHQu9C40LrQuCDQkdC10LvQsNGA0YPRgdGM!5e0!3m2!1sru!2sby!4v1610843483667!5m2!1sru!2sby',
        coord: '53.962129, 27.434541',
        phones: ['+375 17 543-44-44', '+375 17 543-42-10'],
        schedule: '08:00—21:00',
        services: {
            'cardiology': [ 
                {visit_1: 38.45 }, {visit_2: 31.27 }
             ],
            'dermatology': [ 
                {visit_1: 24.21 },
             ],
            'endocrinology': [ 
                {visit_1: 28.43 }, {visit_2: 17.75 }
             ],
            'flebology': [ 
                {visit_1: 28.46 }, {visit_2: 19.95 }
             ],
            'func_diag': [ 
                { serv_1: 25.35 },
                { serv_2: 17.25 },
                { serv_3: 42 },
                { serv_4: 5.16 },
                { serv_6: 45 },
                { serv_7: 88.55 },
                { serv_8: 28 },
                { serv_9: 39 },
                { serv_10: 28.36 },
                { serv_11: 65.21 },
                { serv_12: 202.58 },
             ],
            'gastroenterology': [ 
                {visit_1: 28.77 }, {visit_2: 18.55 }
             ],
            'ginecology': [ 
                {visit_1: 25.71 }, {visit_2: 21.72 }
             ],
            'hirurgy': [ 
                {visit_1:  35.63}, 
             ],
            'lab_diag': [ 
                { serv_1: 3.25 },
                { serv_2: 7.85 },
                { serv_3: 9.25 },
                { serv_4: 4.27 },
                { serv_5: 3.17 },
                { serv_6: 3.26 },
                { serv_7: 5.62 },
                { serv_8: 4.21 },
                { serv_9: 3.17 },
                { serv_10: 9.15 },
                { serv_11: 8.62 },
                { serv_12: 9.25 },
                { serv_13: 7.12 },
                { serv_14: 12.26 },
                { serv_15: 6.75 },
                { serv_16: 17.25 },
                { serv_17: 29.14 },
                { serv_18: 24.15 },
                { serv_19: 15.16 },
                { serv_20: 7.25 },
                { serv_22: 3.98 },
                { serv_23: 4.12 },
                { serv_24: 4.55 },
                { serv_25: 3.25 },
                { serv_26: 7.17 },
                { serv_27: 6.25 },
             ],
            'lor': [ 
                {visit_1: 32.72 }, {visit_2: 24.32 }
             ],
            'mammology': [ 
                {visit_1: 35.16 }, {visit_2: 24.71 }
             ],
            'nevrology': [ 
                {visit_1: 28.88 }, {visit_2: 18.62 }, {visit_candidate: 32.05 }
             ],
            'oftalmology': [ 
                {visit_1: 49.37 }, {visit_2: 36.71 }
             ],
            'onkolog': [ 
                {visit_1:  35.95}
             ],
            'procedure': [ 
                    { serv_1: 7 },
                    { serv_2: 8 },
                    { serv_3: 8.25 },
                    { serv_4: 7.50 },
                    { serv_5: 7.35 },
                    { serv_6: 3.26 },
             ],
            'proctology': [ 
                {visit_1: 36 }, 
             ],
            'psychotherapy': [ 
                {visit_1: 24.07 }, {visit_2: 22.98 }
             ],
            'pulmonology': [ 
                {visit_1: 29.11 }, {visit_2: 18.76 }, 
             ],
            'reabilitation': [ 
                {visit_1: 23.78 },
             ],
            'revmatology': [ 
                {visit_1: 28.21 }, {visit_2: 17.08 }
             ],
            'therapy': [ 
                {visit_1: 28.92 }, {visit_2: 18.02 }, {visit_candidate: 32.44 }, {visit_docent: 33.40  },
             ],
            'urology': [ 
                {visit_1: 21.73 }, {visit_2: 17.44 }
             ],
            'uzi_diagnistic': [ 
                { serv_1: 30.89 },
                { serv_2: 30.85 },
                { serv_3: 11.09 },
                { serv_4: 16.79 },
                { serv_5: 25.35 },
                { serv_6: 11.09 },
                { serv_7: 16.79 },
                { serv_8: 8.39 },
                { serv_9: 11.09 },
                { serv_10: 16.79 },
                { serv_11: 17.50 },
                { serv_12: 25.17 },
                { serv_13: 14.29 },
                { serv_14: 25.17},
                { serv_15: 16.79 },
                { serv_16: 37.23 },
                { serv_17: 8.39 },
                { serv_18: 25.17 },
                { serv_19: 25.17 },
                { serv_20: 11.09 },
                { serv_21: 8.39 },
                { serv_22: 8.45 },
                { serv_23: 14.09 },
             ],
            'x-ray_diag': [ 
                { serv_1: 330.88 },
                { serv_2: 13.44 },
                { serv_3: 20.04 },
                { serv_4: 120.76 },
                { serv_5: 105.12 },
                { serv_6: 19.31 },
                { serv_7: 20.04 },
             ],
        }
    },
    {
        name: 'ЛОДЭ',
        fullname: 'Медицинский центр «ЛОДЭ»',
        adress: 'Минск, пр-т Независимости, 58',
        history: 'Многопрофильный медицинский центр «Лодэ» работает на проспекте Независимости, 58. Здесь можно получить консультацию специалистов, пройти обследования, получить медицинскую помощь и рекомендации по лечению.',
        img: 'assets/centers_img/lode.jpg',
        logo: 'assets/centers_img/lode_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.7566762855845!2d27.588071016037222!3d53.91829963941589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa6fdb49e2b%3A0x6818f5760b5629ee!2z0JvQntCU0K0!5e0!3m2!1sru!2sby!4v1610843519513!5m2!1sru!2sby',
        coord: '53.917846, 27.589140',
        phones: ['+375 29 638-30-03', '+375 17 293-98-00'],
        schedule: '08:00—21:00',
        services: {
            'allergology': [ 
                {visit_1: 35 }, {visit_2: 28 }
             ], 
            'cardiology': [ 
                {visit_1: 35 }, {visit_2: 29 }
             ],
             'cosmetology': [ 
                {visit_1: 26 }, {visit_2: 21 }
             ],
            'dermatology': [ 
                {visit_1: 35 },
             ],
            'endocrinology': [ 
                {visit_1: 38 }, {visit_2: 27 }
             ],
            'func_diag': [ 
                { serv_1: 25 },
                { serv_2: 17 },
                { serv_3: 42 },
                { serv_4: 5 },
                { serv_6: 45 },
                { serv_7: 88 },
                { serv_8: 28 },
                { serv_9: 39 },
                { serv_10: 28 },
                { serv_11: 65 },
                { serv_12: 202 },
             ],
            'gastroenterology': [ 
                {visit_1: 35 }, {visit_2: 29 }
             ],
            'ginecology': [ 
                {visit_1: 25 }, {visit_2: 21 }
             ],
            'hirurgy': [ 
                {visit_1: 35 }, 
             ],
            'lab_diag': [ 
                { serv_1: 3 },
                { serv_2: 7 },
                { serv_3: 9 },
                { serv_4: 4 },
                { serv_5: 3 },
                { serv_6: 3 },
                { serv_7: 5 },
                { serv_8: 4 },
                { serv_9: 3 },
                { serv_10: 9 },
                { serv_11: 8 },
                { serv_12: 9 },
                { serv_13: 7 },
                { serv_14: 12 },
                { serv_15: 6 },
                { serv_16: 17 },
                { serv_17: 29 },
                { serv_18: 24 },
                { serv_19: 15 },
                { serv_20: 7 },
                { serv_22: 3 },
                { serv_23: 4 },
                { serv_24: 4 },
                { serv_25: 3 },
                { serv_26: 7 },
                { serv_27: 6 },
             ],
            'lor': [ 
                {visit_1: 29 }, {visit_2: 24 }
             ],
            'mammology': [ 
                {visit_1: 34 }, {visit_2: 28 }
             ],
            'nevrology': [ 
                {visit_1: 38 }, {visit_2: 31 }, {visit_candidate: 42 }
             ],
            'oftalmology': [ 
                {visit_1: 37 }, {visit_2: 32 }
             ],
            'onkolog': [ 
                {visit_1: 35 }
             ],
            'pediatry': [ 
                {visit_1: 35 }, {visit_2: 29  }, {visit_home: 65 },
             ],
            'procedure': [ 
                    { serv_1: 7 },
                    { serv_2: 8 },
                    { serv_3: 8 },
                    { serv_4: 7 },
                    { serv_5: 7 },
                    { serv_6: 3 },
             ],
            'proctology': [ 
                {visit_1: 76 }, 
             ],
            'psychotherapy': [ 
                {visit_1: 38 }, {visit_2: 32 }
             ],
            'pulmonology': [ 
                {visit_1: 38 }, {visit_2: 31 }, 
             ],
            'revmatology': [ 
                {visit_1: 38 }, {visit_2: 32 }
             ],
            'stomatology': [ 
                {visit_1: 8 },
             ],
            'therapy': [ 
                {visit_1: 35 }, {visit_2: 29  }, {visit_candidate: 42 }, {visit_docent: 45 },
             ],
            'urology': [ 
                {visit_1: 39 }, {visit_2: 29 }
             ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_5: 25 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
             ],
             'x-ray_diag': [ 
                { serv_1: 390 },
                { serv_2: 23 },
                { serv_3: 26 },
                { serv_4: 140 },
                { serv_5: 135 },
                { serv_6: 25 },
                { serv_7: 27 },
             ],
        }
    },     
    {
        name: 'Седьмое небо',
        fullname: 'Медицинский центр «Седьмое небо»',
        adress: 'Минск, ул. Филимонова, 53',
        history: '«Седьмое небо» — это многопрофильный медицинский центр с широким спектром услуг, который работает уже более 10 лет. Здесь качественный сервис, вежливое обслуживание и профессиональное медицинское оснащение.',
        img: 'assets/centers_img/seven_heaven.jpg',
        logo: 'assets/centers_img/seven_heaven_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18795.134197922056!2d27.616315039550788!3d53.92478330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcee5348055d9%3A0x4f7ab681c51deea0!2z0KHQtdC00YzQvNC-0LUg0L3QtdCx0L4!5e0!3m2!1sru!2sby!4v1610843572046!5m2!1sru!2sby',
        coord: '53.924484, 27.633301',
        phones: ['+375 17 352-00-20', '+375 29 749-49-39'],
        schedule: '08:00—21:00',
        services: {
            'cosmetology': [ 
                {visit_1: 20 }, 
                ],
            'flebology': [ 
                {visit_1: 41 }, {visit_2: 35.5 }
                ],
            'gastroenterology': [ 
                {visit_1: 41 }, {visit_2: 35.50 }
                ],
            'ginecology': [ 
                {visit_1: 39.50 }, {visit_2: 34.50 }
                ],
            'hirurgy': [ 
                {visit_1:  35.5 }, {visit_2: 30 }
                ],
            'lor': [ 
                {visit_1: 38.50 }, {visit_2: 33 }
                ],
            'mammology': [ 
                {visit_1: 35.50 }, {visit_2: 30 }
                ],
            'proctology': [ 
                {visit_1: 76 }, 
                ],
            'urology': [ 
                {visit_1: 40.50 }, {visit_2: 33.50 }
                ],
        }
    },
    {
        name: 'Нордин',
        fullname: 'ООО «Медицинский центр Нордин»',
        adress: 'Минск, ул. Сурганова, 47Б',
        history: '«Нордин» — это современный многопрофильный медицинский центр в Минске. Визитная карточка предприятия — коллектив квалифицированных специалистов, современное медоборудование от ведущих японских и европейских производителей, достойный уровень обслуживания пациентов.',
        img: 'assets/centers_img/nordin.jpg',
        logo: 'assets/centers_img/nordin_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.2514693350167!2d27.58597331603739!3d53.92727613873867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf0b679bbf3b%3A0x9a985c52830f3ab9!2z0J3QvtGA0LTQuNC9!5e0!3m2!1sru!2sby!4v1610843606226!5m2!1sru!2sby',
        coord: '53.927247, 27.587999',
        phones: ['159', '+375 17 296-62-72'],
        schedule: '08:00—21:00',
        services: {
            'allergology': [ 
                {visit_1: 41.56 },
                ], 
            'dermatology': [ 
                {visit_1: 45.31 }, {visit_2: 41.61 }
                ],
            'endocrinology': [ 
                {visit_1: 40.17 }, {visit_2: 40.57 }
                ],
            'flebology': [ 
                {visit_1: 35 },
                ],
            'gastroenterology': [ 
                {visit_1: 44.11 },
                ],
            'ginecology': [ 
                {visit_1: 42.75 }, {visit_2: 39.40 }
                ],
            'hirurgy': [ 
                {visit_1: 40 }, 
                ],
            'lab_diag': [ 
                { serv_1: 3 },
                { serv_2: 7 },
                { serv_3: 9 },
                { serv_4: 4 },
                { serv_5: 3 },
                { serv_6: 3 },
                { serv_7: 5 },
                { serv_8: 4 },
                { serv_10: 9 },
                { serv_11: 8 },
                { serv_12: 9 },
                { serv_13: 7 },
                { serv_14: 12 },
                { serv_15: 6 },
                { serv_16: 17 },
                { serv_17: 29 },
                { serv_18: 24 },
                { serv_20: 7 },
                { serv_22: 3 },
                { serv_23: 4 },
                { serv_24: 4 },
                { serv_25: 3 },
                { serv_26: 7 },
                { serv_27: 6 },
                ],
            'lor': [ 
                {visit_1: 43.11 }, {visit_2: 39.71 }
                ],
            'nevrology': [ 
                {visit_1: 45.97 }, {visit_2: 42.17 }, {visit_candidate: 64.15 }
                ],
            'oftalmology': [ 
                {visit_1: 42 },
                ],
            'ortopedy': [ 
                {visit_1: 44.62 }, {visit_2: 41.02 }, {visit_candidate: 50.82 }
                 ],
            'proctology': [ 
                {visit_1: 90 }, 
                ],
            'psychotherapy': [ 
                {visit_1: 46.48 }, {visit_2: 42.58 }
                ],
            'revmatology': [ 
                {visit_1: 43.57 }, {visit_2: 39.97 }
                ],
            'therapy': [ 
                {visit_1: 42.97 }, {visit_2:  39.47 },
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_5: 25 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
                ],
                'x-ray_diag': [ 
                { serv_1: 390 },
                { serv_2: 23 },
                { serv_3: 26 },
                { serv_4: 140 },
                { serv_5: 135 },
                { serv_6: 25 },
                { serv_7: 27 },
                ],
        }
    },
    {
        name: 'Авиценна',
        fullname: 'Медицинский центр «Авиценна»',
        adress: 'Минск, ул. Громова, 14',
        history: 'Центр «Авиценна» — многопрофильное медицинское учреждение, образованное в 1990 году. За годы эффективной работы центр получил высокие оценки пациентов и зарекомендовал себя только с лучшей стороны.',
        img: 'assets/centers_img/avicenna.jpg',
        logo: 'assets/centers_img/avicenna_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.283439910604!2d27.444956316035576!3d53.85560764414379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa9fe915555%3A0x7c3e251bc06e1977!2z0JDQstC40YbQtdC90L3QsCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1610843635324!5m2!1sru!2sby',
        coord: '53.855749, 27.447089',
        phones: ['+375 17 399-63-99', '+375 29 639-90-00'],
        schedule: '08:00—21:00',
        services: {
            'endocrinology': [ 
                {visit_1: 36.42 },
                ],
            'ginecology': [ 
                {visit_1: 35.20 }
                ],
            'nevrology': [ 
                {visit_1: 41.25 },
                ],
            'urology': [ 
                {visit_1: 46.80 },
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
                ],
                'x-ray_diag': [ 
                { serv_2: 23 },
                { serv_3: 26 },
                { serv_5: 135 },
                { serv_6: 25 },
                { serv_7: 27 },
                ],
        }
    },
    {
        name: 'Кравира',
        fullname: 'Медицинский центр «Кравира»',
        adress: 'Минск, пр-т Победителей, 45',
        history: 'Многопрофильный Медицинский центр «Кравира» функционирует более 10 лет. Услуги предоставляют квалифицированные специалисты, имеющие большой стаж работы. В штате медцентра «Кравира» профессора, доценты, доктора и кандидаты медицинских наук.',
        img: 'assets/centers_img/kravira.jpg',
        logo: 'assets/centers_img/kravira_logo.jpg',
        phones: ['+375 17 370-28-61', '+375 29 611-28-61'],
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.886676207865!2d27.53240881603715!3d53.91598963959016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf8a6a9c4f53%3A0x63fa0ed4c368420a!2z0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGAINCa0YDQsNCy0LjRgNCwINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1610843684835!5m2!1sru!2sby',
        coord: '53.915995, 27.534567',
        schedule: '08:00—21:00',
        services: {
            'allergology': [ 
                {visit_1: 38.31 }, {visit_2: 32.53 }
                ], 
            'cardiology': [ 
                {visit_1: 38.29 }, {visit_2: 32.49 }
                ],
            'dermatology': [ 
                {visit_1: 38.34 },{visit_2: 32.53 }
                ],
            'endocrinology': [ 
                {visit_1: 38.33 }, {visit_2: 32.46 }
                ],
            'flebology': [ 
                {visit_1: 38.50 },
                ],
            'func_diag': [ 
                { serv_1: 25 },
                { serv_2: 17 },
                { serv_3: 42 },
                { serv_4: 5 },
                { serv_6: 45 },
                { serv_7: 88 },
                { serv_8: 28 },
                { serv_9: 39 },
                { serv_10: 28 },
                { serv_11: 65 },
                { serv_12: 202 },
                ],
            'gastroenterology': [ 
                {visit_1: 42.55 }, {visit_2: 36.17 }
                ],
            'ginecology': [ 
                {visit_1: 40.71 }, {visit_2: 35.04 }
                ],
            'hirurgy': [ 
                {visit_1: 38.14 }, {visit_2: 30.20 }
                ],
            'lab_diag': [ 
                { serv_1: 3 },
                { serv_2: 7 },
                { serv_3: 9 },
                { serv_4: 4 },
                { serv_5: 3 },
                { serv_6: 3 },
                { serv_7: 5 },
                { serv_8: 4 },
                { serv_9: 3 },
                { serv_10: 9 },
                { serv_11: 8 },
                { serv_12: 9 },
                { serv_13: 7 },
                { serv_14: 12 },
                { serv_15: 6 },
                { serv_16: 17 },
                { serv_17: 29 },
                { serv_18: 24 },
                { serv_19: 15 },
                { serv_20: 7 },
                { serv_22: 3 },
                { serv_23: 4 },
                { serv_24: 4 },
                { serv_25: 3 },
                { serv_26: 7 },
                { serv_27: 6 },
                ],
            'lor': [ 
                {visit_1: 38.31 }, {visit_2: 32.35 }
                ],
            'mammology': [ 
                {visit_1: 38.22 },
                ],
            'massage': [ 
                {visit_1: 79.60 },
                 ],
            'nevrology': [ 
                {visit_1: 38.39 }, {visit_2: 32.59 }, {visit_candidate: 39.39 }
                ],
            'oftalmology': [ 
                {visit_1: 43.88 }, {visit_2: 36.87 }
                ],
            'ortopedy': [ 
                    {visit_1: 37.70 }, {visit_2: 30.40 },
                    ],
            'pediatry': [ 
                {visit_1: 38.32 }, {visit_2: 35.96 }, {visit_home: 53.99 },
                ],
            'proctology': [ 
                {visit_1: 98 }, 
                ],
            'psychotherapy': [ 
                {visit_1: 42.72 }, {visit_2: 36 }
                ],
            'stomatology': [ 
                {visit_1: 8 },
                ],
            'therapy': [ 
                {visit_1: 38.29 }, {visit_2: 32.43 },
                ],
            'urology': [ 
                {visit_1: 39.34 }, {visit_2: 33.66 }
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_5: 25 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
                ],
            }
        },
    {
        name: 'Эмбрио',
        fullname: 'Центр «Эмбрио»',
        adress: 'Минск, ул. Филимонова, 53, эт. 5',
        history: 'Центр вспомогательной репродукции «Эмбрио» является одним из ведущих центров в Беларуси в области репродуктивной медицины. Здесь используют большинство существующих в мире методик ВРТ и работают со сложными случаями женского и мужского бесплодия.',
        img: 'assets/centers_img/embrio.jpg',
        logo: 'assets/centers_img/embrio_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.4144093089076!2d27.63110331603735!3d53.92438113895717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcee3622f2e27%3A0xb52a200514d575f0!2z0K3QvNCx0YDQuNC-!5e0!3m2!1sru!2sby!4v1610843715859!5m2!1sru!2sby',
        coord: '53.924484, 27.633301',
        phones: ['+375 29 333-99-13', '+375 17 397-64-04'],
        schedule: '09:00—19:00',
        services: {
            'ginecology': [ 
                {visit_1: 32 }, {visit_2: 15 }
                ],
            'lab_diag': [ 
                { serv_1: 3 },
                { serv_2: 7 },
                { serv_3: 9 },
                { serv_4: 4 },
                { serv_5: 3 },
                { serv_6: 3 },
                { serv_7: 5 },
                { serv_8: 4 },
                { serv_9: 3 },
                { serv_10: 9 },
                { serv_11: 8 },
                { serv_12: 9 },
                { serv_13: 7 },
                { serv_14: 12 },
                { serv_15: 6 },
                { serv_16: 17 },
                { serv_17: 29 },
                { serv_18: 24 },
                { serv_19: 15 },
                { serv_20: 7 },
                { serv_22: 3 },
                { serv_23: 4 },
                { serv_24: 4 },
                { serv_25: 3 },
                { serv_26: 7 },
                { serv_27: 6 },
            ],
            'urology': [ 
                {visit_1: 33.10 }, {visit_2: 22.50 }
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_5: 25 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
            ],
        }
    },
    {
        name: 'Новый Лекарь',
        fullname: 'Медицинский центр «Новый Лекарь»',
        adress: 'Минск, ул. Энгельса, 34А/2',
        history: '«Новый Лекарь» – современный комфортный медицинский центр в Минске, оказывающий широкий спектр медицинских услуг. Один из главных принципов медицинского центра «Новый Лекарь» – единство традиций и современных методов диагностики и лечения.',
        img: 'assets/centers_img/noviy_lekar.jpg',
        logo: 'assets/centers_img/noviy_lekar_logo.jpg',
        phones: ['+375 29 102-02-03', '+375 29 501-02-03'],
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.9333008635263!2d27.562921616036746!3d53.897389440993216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc16cdc5ae7%3A0x6019bd4456aa49a0!2z0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGAINCd0L7QstGL0Lkg0JvQtdC60LDRgNGM!5e0!3m2!1sru!2sby!4v1610843745423!5m2!1sru!2sby',
        coord: '53.897392, 27.565110',
        schedule: '08:00—20:00',
        services: {
            'cardiology': [ 
                {visit_1: 40 }, {visit_2: 36 }
                ],
            'dermatology': [ 
                {visit_1: 40 }, {visit_2: 35 }
                ],
            'endocrinology': [ 
                {visit_1: 42 }, {visit_2: 37 }
                ],
            'ginecology': [ 
                {visit_1: 45.60 }, {visit_2: 40.60 }
                ],
            'nevrology': [ 
                {visit_1: 41 }, {visit_2: 37 }, {visit_candidate: 41 }
                ],
            'stomatology': [ 
                {visit_1: 8 },
                ],
            'therapy': [ 
                {visit_1: 39 }, {visit_2: 39  },
                ],
            'urology': [ 
                {visit_1: 41 }, {visit_2: 37 }
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_22: 12 },
                { serv_23: 16 },
            ],
        }
    },
    {
        name: 'Белевромед',
        fullname: 'Медицинский центр «Белевромед»',
        adress: 'Минск, ул. Червякова, 22',
        history: 'Наш медицинский центр предлагает не просто лечение, а лечение без боли. По желанию пациента любая процедура может быть проведена под общим наркозом. ',
        img: 'assets/centers_img/belevro.jpg',
        logo: 'assets/centers_img/belevro_logo.jpg',
        phones: ['+375 29 130-30-05', '+375 17 358-81-98'],
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.3299289174392!2d27.5482483160375!3d53.92588213884389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6e009b6783%3A0x7aecea8fb37f176f!2z0JHQtdC70JXQstGA0L7QnNC10LQg0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGA!5e0!3m2!1sru!2sby!4v1610843772482!5m2!1sru!2sby',
        coord: '53.925667, 27.550270',
        schedule: '08:00—20:00',
        services: {
            'dermatology': [ 
                {visit_1: 22 },
                ],
            'ginecology': [ 
                {visit_1: 45 }, {visit_2: 30 }
                ],
            'stomatology': [ 
                {visit_1: 10 },
                ],
            }
    },
    {
        name: 'СИНЛАБ',
        fullname: 'Медицинская лаборатория «СИНЛАБ»',
        adress: 'Минск, ул. Академическая, 26',
        history: 'С 2006 года мы входим в сеть независимых европейских медицинских лабораторий немецкой корпорации «Synlab GmbH», что дает нам право получать оборудование и реактивы от ведущих производителей в области лабораторных исследований.',
        img: 'assets/centers_img/synlab.jpg',
        logo: 'assets/centers_img/synlab_logo.jpg',
        phones: ['+375 17 378-33-35', '+375 29 263-95-03'],
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.2441225353464!2d27.60757501603705!3d53.90963774006947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbce536a52fcad%3A0x7025664127725d84!2sSYNLAB!5e0!3m2!1sru!2sby!4v1610843799831!5m2!1sru!2sby',
        coord: '53.909413, 27.609918',
        schedule: '07:00—19:00',
        services: {
            'lab_diag': [ 
                { serv_1: 3 },
                { serv_2: 7 },
                { serv_3: 9 },
                { serv_4: 4 },
                { serv_5: 3 },
                { serv_6: 3 },
                { serv_7: 5 },
                { serv_8: 4 },
                { serv_9: 3 },
                { serv_10: 9 },
                { serv_11: 8 },
                { serv_12: 9 },
                { serv_13: 7 },
                { serv_14: 12 },
                { serv_15: 6 },
                { serv_16: 17 },
                { serv_17: 29 },
                { serv_18: 24 },
                { serv_19: 15 },
                { serv_20: 7 },
                { serv_22: 3 },
                { serv_23: 4 },
                { serv_24: 4 },
                { serv_25: 3 },
                { serv_26: 7 },
                { serv_27: 6 },
            ],
        }
    },
    {
        name: 'Терра Медика',
        fullname: 'Медицинский центр «Терра Медика»',
        adress: 'Минск, пер. Кузьмы Чорного 3',
        history: 'Если вы в поиске душевного медицинского центра, где индивидуальный подход не просто слова, «Терра Медика» ваш надежный выбор. Успешно работая с 2000 года, центр зарекомендовал себя только с положительной стороны. Достойный профессиональный коллектив, актуальные современные методики лечения и широкий спектр услуг гарантируют только приятные впечатления от посещения «Терра Медика».',
        img: 'assets/centers_img/terra.jpg',
        logo: 'assets/centers_img/terra_logo.jpg',
        phones: ['+375 17 318-14-78', '+375 29 772-44-11'],
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.4345020094347!2d27.60424041603739!3d53.924024138984066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf05c097dcbb%3A0x95e306ff03484407!2z0KLQtdGA0YDQsCDQnNC10LTQuNC60LA!5e0!3m2!1sru!2sby!4v1610843827115!5m2!1sru!2sby',
        coord: '53.930178, 27.623716',
        schedule: '08:00—19:00',
        services: {
            'cosmetology': [ 
                {visit_1: 12 },
                ],
            'dermatology': [ 
                {visit_1: 36 }, {visit_2: 30 }
                ],
            'endocrinology': [ 
                {visit_1: 36 }, {visit_2: 30 }
                ],
            'ginecology': [ 
                {visit_1: 36 }, {visit_2: 30 }
                ],
            'lor': [ 
                {visit_1: 34 }, {visit_2: 29 }
                ],
            'mammology': [ 
                {visit_1: 36 }, {visit_2: 30 }
                ],
            'massage': [ 
                    {visit_1: 20 },
                    ],
            'nevrology': [ 
                {visit_1: 37 }, {visit_2: 32 },
                ],
            'procedure': [ 
                    { serv_1: 7 },
                    { serv_2: 8 },
                    { serv_3: 8 },
                    { serv_4: 7 },
                    { serv_5: 7 },
                    { serv_6: 3 },
                ],
            'therapy': [ 
                {visit_1: 36 }, {visit_2: 30  },
                ],
            'urology': [ 
                {visit_1: 36 }, {visit_2: 30 }
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_5: 25 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
                ],
        }
    },
    {
        name: 'МККДЦ',
        fullname: 'УЗ "МИНСКИЙ КЛИНИЧЕСКИЙ КОНСУЛЬТАЦИОННО-ДИАГНОСТИЧЕСКИЙ ЦЕНТР"',
        adress: 'Минск, ул. Семашко, 10',
        history: 'Минский клинический консультативно-диагностический центр продуктивно работает с 1989 года, оказывая качественную консультативно-диагностическую помощь пациентам и внедряя в практику диагностики современные достижения в области медицины.',
        img: 'assets/centers_img/mkkdc.jpg',
        logo: 'assets/centers_img/mkkdc_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.104756117947!2d27.49449041603562!3d53.85878514390426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd0644f0fc403%3A0xdde75d7a36fd5c85!2z0JzQuNC90YHQutC40Lkg0LrQvtC90YHRg9C70YzRgtCw0YbQuNC-0L3QvdC-LdC00LjQsNCz0L3QvtGB0YLQuNGH0LXRgdC60LjQuSDRhtC10L3RgtGA!5e0!3m2!1sru!2sby!4v1610843857183!5m2!1sru!2sby',
        phones: ['+375 17 270-21-42', '+375 44 550-00-90'],
        coord: '53.858771, 27.496371',
        schedule: '08:00—19:00',
        services: {
            'func_diag': [ 
                { serv_1: 25 },
                { serv_2: 17 },
                { serv_3: 42 },
                { serv_4: 5 },
                { serv_6: 45 },
                { serv_7: 88 },
                { serv_8: 28 },
                { serv_9: 39 },
                { serv_10: 28 },
                { serv_11: 65 },
                { serv_12: 202 },
                ],
            'gastroenterology': [ 
                {visit_1: 24.44 },
                ],
            'ginecology': [ 
                {visit_1: 11.05 },
                ],
            'lab_diag': [ 
                { serv_1: 3 },
                { serv_2: 7 },
                { serv_3: 9 },
                { serv_4: 4 },
                { serv_5: 3 },
                { serv_6: 3 },
                { serv_7: 5 },
                { serv_8: 4 },
                { serv_9: 3 },
                { serv_10: 9 },
                { serv_11: 8 },
                { serv_12: 9 },
                { serv_13: 7 },
                { serv_14: 12 },
                { serv_15: 6 },
                { serv_16: 17 },
                { serv_17: 29 },
                { serv_18: 24 },
                { serv_19: 15 },
                { serv_20: 7 },
                { serv_22: 3 },
                { serv_23: 4 },
                { serv_24: 4 },
                { serv_25: 3 },
                { serv_26: 7 },
                { serv_27: 6 },
                ],
            'lor': [ 
                {visit_1: 11.14 },
                ],
            'procedure': [ 
                    { serv_1: 7 },
                    { serv_2: 8 },
                    { serv_3: 8 },
                    { serv_4: 7 },
                    { serv_6: 3 },
                ],
            'urology': [ 
                {visit_1: 11.71 },
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_5: 25 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
                ],
                'x-ray_diag': [ 
                { serv_1: 340 },
                { serv_2: 13 },
                { serv_3: 26 },
                { serv_4: 120 },
                { serv_5: 105 },
                { serv_6: 21 },
                { serv_7: 24 },
            ],
        }
    },
    {
        name: 'Биомедика',
        fullname: 'Медицинский центр «Биомедика»',
        adress: 'Минск, ул. Червякова, 64',
        history: 'Медицинский центр «Биомедика» был открыт в 1999 году как специфическая лаборатория молекулярно-биологических исследований. На сегодняшний день медцентр предлагает широкий спектр медицинских услуг с использованием как традиционных принципов диагностики и лечения, так и новых методик.',
        img: 'assets/centers_img/biomedica.jpg',
        logo: 'assets/centers_img/biomedica_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.0514811645353!2d27.546377816037552!3d53.930829238470636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf85c0c55555%3A0x8e3321400b8fcb64!2z0JHQuNC-0LzQtdC00LjQutCwINCf0LvRjtGBINCe0J7QniDQnNC10LTQuNGG0LjQvdGB0LrQuNC5INCm0LXQvdGC0YA!5e0!3m2!1sru!2sby!4v1610843894777!5m2!1sru!2sby',
        phones: ['+375 17 350-77-44', '+375 29 769-29-17'],
        coord: '53.930788, 27.548608',
        schedule: '09:00—20:00',
        services: {
            'allergology': [ 
                {visit_1: 29.42 },
                ], 
            'dermatology': [ 
                {visit_1: 30.69 }, {visit_2: 27.55 }
                ],
            'ginecology': [ 
                {visit_1: 31.98 }, {visit_2: 27.84 }
                ],
            'lab_diag': [ 
                { serv_1: 3 },
                { serv_2: 7 },
                { serv_3: 9 },
                { serv_4: 4 },
                { serv_5: 3 },
                { serv_6: 3 },
                { serv_7: 5 },
                { serv_9: 3 },
                { serv_10: 9 },
                { serv_11: 8 },
                { serv_12: 9 },
                { serv_13: 7 },
                { serv_15: 6 },
                { serv_16: 17 },
                { serv_18: 24 },
                { serv_20: 7 },
                { serv_22: 3 },
                { serv_23: 4 },
                { serv_24: 4 },
                { serv_25: 3 },
                { serv_26: 7 },
                { serv_27: 6 },
                ],
            'urology': [ 
                {visit_1: 27.92 }, {visit_2: 22.95 }
                ],
            'uzi_diagnistic': [ 
                { serv_1: 32 },
                { serv_2: 30 },
                { serv_3: 14 },
                { serv_4: 18 },
                { serv_5: 25 },
                { serv_6: 17 },
                { serv_7: 15 },
                { serv_8: 9 },
                { serv_9: 13 },
                { serv_10: 18 },
                { serv_11: 12 },
                { serv_12: 28 },
                { serv_13: 19 },
                { serv_14: 29 },
                { serv_15: 13 },
                { serv_16: 39 },
                { serv_17: 12 },
                { serv_18: 26 },
                { serv_19: 29 },
                { serv_20: 14 },
                { serv_21: 12 },
                { serv_22: 12 },
                { serv_23: 16 },
                ],
        }
    },
    {
        name: 'ТЭС-терапия',
        fullname: 'Медицинский центр «ТЭС-терапия»',
        adress: 'Минск, ул. Немига, 30',
        history: 'Медицинский центр «ТЭС-терапия» уже более 18 лет оказывает услуги по лечению в Минске алкогольной, никотиновой, пищевой и игровой зависимостей с применением метода транскраниальной электростимуляции мозга (ТЭС).',
        img: 'assets/centers_img/tes.jpg',
        logo: 'assets/centers_img/tes_logo.jpg',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.7181126205746!2d27.544903216036815!3d53.9012140407048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe93591d34b%3A0x7d9952d3b3cb60f6!2z0KLQrdChLdGC0LXRgNCw0L_QuNGP!5e0!3m2!1sru!2sby!4v1610843924405!5m2!1sru!2sby',
        phones: ['+375 29 557-75-87', '+375 17 211-09-57'],
        coord: '53.901456, 27.547332',
        schedule: '08:00—19:00',
        services: {
            'narcology': [ 
                {visit_1: 50.28 }, {visit_2: 47.32 }
                    ], 
            'psychotherapy': [ 
                {visit_1: 64.25 }, {visit_2: 54.28 }
                ],
        }
    },
    {
        name: 'ОПТИМЕД',
        fullname: 'Специализированный центр восстановления зрения «ОПТИМЕД»',
        adress: 'Минск, ул. Филимонова, 53',
        history: 'Специализированный центр восстановления зрения «ОПТИМЕД» работает в Минске с 1998 года. Сегодня «ОПТИМЕД» - международный центр лечения зрения, который прилагает все усилия, опыт и талант, чтобы жители Беларуси и зарубежья имели возможность видеть мир во всех красках.',
        img: 'assets/centers_img/optimed.jpg',
        logo: 'assets/centers_img/optimed_logo.jpg',
        phones: ['+375 29 549-51-79', '+375 44 549-51-79'],
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.4144093089076!2d27.63110331603735!3d53.92438113895717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcee5348055d9%3A0x9aa51f722e4f2587!2z0KHQv9C10YbQuNCw0LvQuNC30LjRgNC-0LLQsNC90L3Ri9C5INGG0LXQvdGC0YAg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjyDQt9GA0LXQvdC40Y8g0J7Qn9Ci0JjQnNCV0JQ!5e0!3m2!1sru!2sby!4v1610843951181!5m2!1sru!2sby',
        coord: '53.924484, 27.633301',
        schedule: '08:00—20:00',
        services: {
            'oftalmology': [ 
                {visit_1: 40 }
            ], 
        }
    },
]

const services_category = [
    {
        id: 'uzi_diagnistic',
        logo: 'assets/services_logo/uzi_diagnistic.svg',
        category_name: 'Ультразвуковая диагностика (УЗИ)',
        medic: null,
        services: {
            visit_1: null,
            visit_2: null,
            serv_0: null,
            serv_1: 'УЗИ брюшной полости и почек',
            serv_2: 'УЗИ почек и надпочечников ',
            serv_3: 'УЗИ почек, надпочечников и мочевого пузыря',
            serv_4: 'УЗИ почек, надпочечников и мочевого пузыря с определением остаточной мочи',
            serv_5: 'УЗИ мочевого пузыря с определением остаточной мочи',
            serv_6: 'УЗИ печени и желчного пузыря',
            serv_7: 'УЗИ печени и желчного пузыря с определением функции',
            serv_8: 'УЗИ селезенки',
            serv_9: 'УЗИ поджелудочной железы',
            serv_10: 'УЗИ предстательной железы и мочевого пузыря с определением остаточной мочи',
            serv_11: 'УЗИ мошонки',
            serv_12: 'УЗИ брахиоцефальных артерий (БЦА)',
            serv_13: 'УЗИ гинекологическое',
            serv_14: 'УЗИ допплерография сосудов внутренних органов',
            serv_15: 'УЗИ молочных желез',
            serv_16: 'УЗИ сердца',
            serv_17: 'УЗИ слюнных желез',
            serv_18: 'УЗИ сосудов',
            serv_19: 'УЗИ сосудов шеи и головного мозга',
            serv_20: 'УЗИ суставов',
            serv_21: 'УЗИ мышц и сухожилий',
            serv_22: 'УЗИ узи детям',
            serv_23: 'УЗИ щитовидной железы',
        }
    },
    {
        id: 'ginecology',
        logo: 'assets/services_logo/ginecology.svg',
        category_name: 'Гинекология',
        medic: 'Гинеколог',
        services: {
            visit_1: 'Первичный прием акушера-гинеколога',
            visit_2: 'Повторный прием акушера-гинеколога',
            visit_candidate: 'Первичный прием врача акушера-гинеколога кандидата медицинских наук',
            serv_0: 'Консультация гинеколога',
            serv_1: 'Ведение беременности',
            serv_2: 'Диагностика ИППП',
            serv_3: 'Диагностика и лечение патологий шейки матки',
            serv_4: 'Кольпоскопия',
            serv_5: 'Консультация гинеколога',
            serv_6: 'Консультация гинеколога-эндокринолога',
            serv_7: 'Консультация по планированию беременности',
            serv_8: 'Прерывание беременности',
            serv_9: 'Установка ВМС',
        }
    },
    {
        id: 'lor',
        logo: 'assets/services_logo/lor.svg',
        category_name: 'Оториноларингология (ЛОР)',
        medic: 'Оториноларинголог',
        services: {
            visit_1: 'Первичный прием ЛОР-врача',
            visit_2: 'Повторный прием ЛОР-врача',
            serv_0: 'Консультирование оториноларинголога',
            serv_1: 'Диагностика заболеваний гортани, носа, носоглотки, нарушения слуха',
            serv_2: 'Хирургическое вмешательство (вскрытие фурункула, абсцессов, пункции, отогематом и т.п.)',
        }
    },
    {
        id: 'hirurgy',
        logo: 'assets/services_logo/hirurgy.svg',
        category_name: 'Хирургия',
        medic: 'Хирург',
        services: {
            visit_1: 'Первичный прием врача-хирурга',
            visit_2: 'Повторный прием врача-хирурга',
            visit_candidate: 'Прием врача-хирурга, кандидата медицинских наук',
            serv_0: 'Консультация хирурга',
            serv_1: 'Осмотр хирурга',
            serv_2: 'Удаление различных образований кожи и подкожной жировой клетчатки',
            serv_3: 'Хирургическое лечение гнойно-воспалительных заболеваний кожи и подкожной жировой клетчатки',
            serv_4: 'Удаление вросшего ногтя с использованием микроволнового воздействия',
            serv_5: 'Выполнение периартикулярных блокад при заболеваниях связочно-суставного аппарата',
            serv_6: 'Хирургическая обработка ран, перевязки, снятие швов, лечение травм мягких тканей',
            serv_7: 'Консультации по поводу лечения хирургических заболеваний',
            serv_8: 'Пройти профосмотр',
            serv_9: 'Удалить любое доброкачественное новообразование',
            serv_10: 'Сделать биопсию',
            serv_11: 'Детская хирургия',
            serv_12: 'Сосудистая хирургия',
            serv_13: 'Общая хирургия',
        }
    },
    {
        id: 'onkolog',
        logo: 'assets/services_logo/onkolog.svg',
        category_name: 'Онкология',
        medic: 'Онколог',
        services: {
            visit_1: 'Первичный прием врача-онколога',
            visit_2: 'Повторный прием врача-онколога',
            serv_0: 'Консультация онколога',
            serv_1: 'Терапевтическое лечение',
        }
    },
    {
        id: 'urology',
        logo: 'assets/services_logo/urology.svg',
        category_name: 'Урология',
        medic: 'Уролог',
        services: {
            visit_1: 'Первичный прием врача-уролога',
            visit_2: 'Повторный прием врача-уролога',
            serv_0: 'Консультация уролога',
            serv_1: 'Диагностика заболеваний и патологий мочевыводящей системы',
            serv_2: 'Диагностика заболеваний почек',
            serv_3: 'Диагностика заболеваний репродуктивной системы',
            serv_4: 'Массаж предстательной железы',
            serv_5: 'Ректальный массаж простаты',
            serv_6: 'Инстилляция (введение лекарства) мочевого пузыря',
            serv_7: 'Лечение ИПП',
            serv_8: 'Взятие срочных анализов',
            serv_9: 'Детская урология',
            serv_10: 'Консультация нефролога',
            serv_11: 'Лечение мужского бесплодия',
        }
    },
    {
        id: 'dermatology',
        logo: 'assets/services_logo/dermatology.svg',
        category_name: 'Дерматология',
        medic: 'Дерматолог',
        services: {
            visit_1: 'Первичный прием врача-дерматовенеролога',
            visit_2: 'Повторный прием врача-дерматовенеролога',
            serv_0: 'Консультация дерматолога',
            serv_1: 'Лечение грибковых заболеваний',
            serv_2: 'Лечение кожных заболеваний',
            serv_3: 'Удаление родинок',
            serv_4: 'Удаление бородавок',
            serv_5: 'Удаление кондилом',
            serv_6: 'Лечение кондилом',
            serv_7: 'Удаление моллюсков',
            serv_8: 'Удаление папиллом',
            serv_9: 'Удаление вросшего ногтя',
            serv_10: 'Удаление кератомы',
            serv_11: 'Удаление атеромы',
            serv_12: 'Удаление липомы',
        }
    },
    {
        id: 'cardiology',
        logo: 'assets/services_logo/cardiology.svg',
        category_name: 'Кардиология',
        medic: 'Кардиолог',
        services: {
            visit_1: 'Первичный прием врача-кардиолога',
            visit_2: 'Повторный прием врача-кардиолога',
            visit_home: 'Вызов врача-кардиолога на дом',
            serv_0: 'Консультация кардиолога',
            serv_1: 'Терапевтическое лечение',
            serv_: 'Лечение ишемической БС',
            erv_: 'Лечение инфаркта миокарда',
            erv_: 'Лечение стенокардии',
            erv_: 'Лечение нарушения ритма и проводимости сердца',
            erv_: 'Имплантация электрокардиостимуляторов и выполнения радиочастотной абляции субстрата аритмии',
            erv_: 'Лечение сердечной недостаточность высокого функционального класса',
            erv_: 'Лечение воспалительных заболевания сердца;',
        }
    },
    {
        id: 'gastroenterology',
        logo: 'assets/services_logo/gastroenterology.svg',
        category_name: 'Гастроэнтерология',
        medic: 'Гастроэнтеролог',
        services: {
            visit_1: 'Первичный прием врача-гастроэнтеролога',
            visit_2: 'Повторный прием врача-гастроэнтеролога',
            serv_0: 'Консультация гастроэнтеролога',
            serv_1: 'Дыхательный тест на хеликобактер пилори (ХЕЛИК)',
            serv_2: 'Составление индивидуальной лечебной диеты',
            serv_3: 'Лечение изжоги',
            serv_4: 'Лечение отрыжки',
            serv_5: 'Лечение снижения или извращения аппетита',
            serv_6: 'Лечение запора',
            serv_7: 'Лечение диареи',
            serv_8: 'Лечение замедления отхождения кишечных газов',
            serv_9: 'Лечение избыточного отхождения кишечных газов',
            serv_10: 'Лечение вздутия живота',
            serv_11: 'Лечение запаха изо рта;',
            serv_12: 'Лечение затруднения при проглатывании пищи',
        }
    },
    {
        id: 'allergology',
        logo: 'assets/services_logo/allergology.svg',
        category_name: 'Аллергология',
        medic: 'Аллерголог',
        services: {
            visit_1: 'Первичный прием врача-аллерголога',
            visit_2: 'Повторный прием врача-аллерголога',
            serv_0: 'Консультация аллерголога',
            serv_1: 'Аллерготестирование по крови',
            serv_2: 'Кожно-скарификационные пробы',
            serv_3: 'Молекулярная аллергодиагностика',
            serv_4: 'Определение причин и источников аллергии',
            serv_5: 'Лечение аллергии',
            serv_6: 'Подбор диеты при пищевой аллергии',
        }
    },
    {
        id: 'pediatry',
        logo: 'assets/services_logo/pediatry.svg',
        category_name: 'Педиатрия',
        medic: 'Педиатр',
        services: {
            visit_1: 'Первичный прием врача-педиатра',
            visit_2: 'Повторный прием врача-педиатра',
            visit_home: 'Вызов врача-педиатра на дом',
            serv_0: 'Консультация педиатра',
            serv_1: 'Выезд на дом для забора крови и мочи',
            serv_2: 'Консультации при систематических респираторных инфекциях',
            serv_3: 'Лечение гиперплазии',
            serv_4: 'Наблюдение ребенка до одного года',
            serv_5: 'Неуточненный диагноз заболевания',
            serv_6: 'Дисбактериоз',
            serv_7: 'Возникновении аллергической реакции',
            serv_8: 'Справка в школу и детский сад',
        }
    },
    {
        id: 'nevrology',
        logo: 'assets/services_logo/nevrology.svg',
        category_name: 'Неврология',
        medic: 'Невролог',
        services: {
            visit_1: 'Первичный прием врача-невролога',
            visit_2: 'Повторный прием врача-невролога',
            visit_candidate: 'Консультация невролога, к.м.н.',
            serv_0: 'Консультация невролога',
            serv_1: 'Лечение ВСД',
            serv_2: 'Лечение невритов',
            serv_3: 'Лечение остеохондроза позвоночника',
            serv_4: 'Лечение радикулита',
            serv_5: 'Лечение нарушения кровообращения',
            serv_6: 'Лечение инсульта и устранение его последствий',
            serv_7: 'Лечение болезней Паркинсона',
            serv_8: 'Лечение болезни Альцгеймера',
        }
    },
    {
        id: 'oftalmology',
        logo: 'assets/services_logo/oftalmology.svg',
        category_name: 'Офтальмология',
        medic: 'Офтальмолог',
        services: {
            visit_1: 'Первичный прием врача-офтальмолога',
            visit_2: 'Повторный прием врача-офтальмолога',
            serv_0: 'Консультация офтальмолога',
            serv_1: 'Полное диагностическое обследование зрения',
            serv_2: 'Измерение внутриглазного давления',
            serv_3: 'Осмотр глазного дна',
            serv_4: 'Периметрия',
            serv_5: 'Лечение глаукомы',
            serv_6: 'Воспалительные и дистрофические заболевания глаз',
            serv_7: 'Диагностика и лечение проблем выработки слезы',
            serv_8: 'Гониоскопия',
            serv_9: 'Осмотр глазного дна',
            serv_10: 'Промывание и зондирование слезных путей',
            serv_11: 'Лечение трихиаза',
            serv_12: 'Субконъюнктивальные и парабульбарные инъекции',
        }
    },
    {
        id: 'func_diag',
        logo: 'assets/services_logo/func_diag.svg',
        category_name: 'Функциональная диагностика',
        medic: 'Функциональный диагност',
        services: {
            serv_0: null,
            serv_1: 'Суточное мониторирование давления',
            serv_2: 'СМАД',
            serv_3: 'Холтер-мониторирование',
            serv_4: 'Электрокардиография (ЭКГ)',
            serv_5: 'Нагрузочные тесты',
            serv_6: 'Эхокардиография',
            serv_7: 'Чреспищеводная ЭХО-КГ',
            serv_8: 'Эргоспирометрия',
            serv_9: 'Исследование функции внешнего дыхания',
            serv_10: 'Электроэнцефалография',
            serv_11: 'Электронейромиография ',
            serv_12: 'Вестибуло - и стабилометрия',
        }
    },
    {
        id: 'lab_diag',
        logo: 'assets/services_logo/lab_diag.svg',
        category_name: 'Лабораторная диагностика',
        medic: null,
        services: {
            serv_0: null,
            serv_1: 'Общий анализ крови',
            serv_2: 'Биохимический анализ крови',
            serv_3: 'Аллергологический анализ крови',
            serv_4: 'Анализ крови на онкомаркеры',
            serv_5: 'Анализ крови на сахар',
            serv_6: 'Анализ крови на свертываемость',
            serv_7: 'Анализ крови ХЧГ (диагностика беременности)',
            serv_8: 'Определение группы крови, резус-фактора',
            serv_9: 'Серологический анализ крови',
            serv_10: 'Аллергологические исследования',
            serv_11: 'Анализ на гепатит',
            serv_12: 'Анализ на гормоны щитовидной железы',
            serv_13: 'Анализ на клещевой энцефалит',
            serv_14: 'Анализ на половые гормоны',
            serv_15: 'Анализ на Хеликобактер Пилори',
            serv_16: 'Бактериологическая диагностика',
            serv_17: 'Биохимические исследования',
            serv_18: 'Диагностика венерических заболеваний',
            serv_19: 'Исследование на ВИЧ',
            serv_20: 'Лабораторная диагностика инфекций',
            serv_21: 'Лабораторные исследования во время беременности',
            serv_22: 'Анализы крови',
            serv_23: 'Анализы мочи',
            serv_24: 'Анализ мазков',
            serv_25: 'Анализ спермы',
            serv_26: 'Анализ сока простаты',
            serv_27: 'Анализ иных биологических жидкостей',
            serv_28: 'ИППП анализ',
        }
    },
    {
        id: 'flebology',
        logo: 'assets/services_logo/flebology.svg',
        category_name: 'Флебология',
        medic: 'Флеболог',
        services: {
            visit_1: 'Первичный прием врача-флеболога',
            visit_2: 'Повторный прием врача-флеболога',
            visit_uzds: 'Первичный прием врача-флеболога с УЗДС',
            serv_0: 'Консультация флеболога',
            serv_1: 'Лечение варикозного расширения вен.',
            serv_2: 'Лечение тромбофлебита тромбоза глубоких вен',
            serv_3: 'Лечение нарушения проходимости вен',
            serv_4: 'Лечение сосудистых сеточек и сосудистых звездочек.',
        }
    },
    {
        id: 'endocrinology',
        logo: 'assets/services_logo/endocrinology.svg',
        category_name: 'Эндокринология',
        medic: 'Эндокринолог',
        services: {
            visit_1: 'Первичный прием врача-эндокринолога',
            visit_2: 'Повторный прием врача-эндокринолога',
            serv_0: 'Консультация эндокринолога',
            serv_1: 'Заболевания щитовидной железы',
            serv_2: 'Нарушения кальциевого обмена',
            serv_3: 'Нарушения роста и развития детей',
            serv_4: 'Нарушения половой функции, бесплодия',
        }
    },
    {
        id: 'therapy',
        logo: 'assets/services_logo/therapy.svg',
        category_name: 'Терапия',
        medic: 'Терапевт',
        services: {
            visit_1: 'Первичный прием врача-терапевта',
            visit_2: 'Повторный прием врача-терапевта',
            visit_home: 'Вызов врача-терапевта на дом',
            visit_candidate: 'Консультация врача доцента, к.м.н. терапевтического профиля ',
            visit_docent: 'Консультация врача профессора, д.м.н. терапевтического профиля',
            serv_0: 'Консультация терапевта',
            serv_1: 'Лечебно-диагностический прием',
            serv_2: 'Профосмотр',
            serv_3: 'Консультации по заболеваниям верхних дыхательных путей (пневмония, бронхиты);',
            serv_4: 'Консультации по заболеваниям органов желудочно-кишечного тракта ',
        }
    },
    {
        id: 'revmatology',
        logo: 'assets/services_logo/revmatology.svg',
        category_name: 'Ревматология',
        medic: 'Ревматолог',
        services: {
            visit_1: 'Первичный прием врача-ревматолога',
            visit_2: 'Повторный прием врача-ревматолога',
            serv_0: 'Консультация ревматолога',
            serv_1: 'Лечение артрита',
            serv_2: 'Лечение ревматической лихорадки',
            serv_3: 'Лечение заболевания сосудов',
            serv_4: 'Лечение подагры',
            serv_5: 'Лечение остеопороза',
        }
    },
    {
        id: 'cosmetology',
        logo: 'assets/services_logo/cosmetology.svg',
        category_name: 'Косметология',
        medic: 'Косметолог',
        services: {
            visit_1: 'Первичный прием врача-косметолога',
            visit_2: 'Повторный прием врача-косметолога',
            serv_0: 'Консультация косметолога',
            serv_1: 'Биоревитализация (биорепарация) ',
            serv_2: 'Диспорт и Нейронокс',
            serv_3: 'Контурная корекция',
            serv_4: 'Нитевой лифтинг',
            serv_5: 'Пластическая хирургия',
        }
    },
    {
        id: 'x-ray_diag',
        logo: 'assets/services_logo/x-ray_diag.svg',
        category_name: 'Лучевая диагностика',
        medic: null,
        services: {
            serv_0: null,
            serv_1: 'Остеоденситометрия',
            serv_2: 'Традиционная конвенционная рентгенография',
            serv_3: 'функциональные исследования костно-суставного аппарата',
            serv_4: 'Компьютерная рентгеновская томография (КТ)',
            serv_5: 'Магнитно-резонансная томография (МРТ)',
            serv_6: 'Цифровая рентгеновская маммография',
            serv_7: 'Рентгенография мышечных тканей'
        }
    },
    {
        id: 'mammology',
        logo: 'assets/services_logo/mammology.svg',
        category_name: 'Маммология',
        medic: 'Маммолог',
        services: {
            visit_1: 'Первичный прием врача-маммолога',
            visit_2: 'Повторный прием врача-маммолога',
            serv_0: 'Консультация маммолога',
            serv_1: 'Исследование выделений из молочной железы',
            serv_2: 'Физикальное исследование',
            serv_3: 'Спектральная маммография с контрастным усилением (CESM)',
            serv_4: 'Биопсия под рентгеновской навигацией',
            serv_5: 'Предоперационная установка локализационных игл («гарпунов»)',
            serv_6: 'Томосинтез (DBT)',
            serv_7: 'Оценка готовых маммограмм',
            serv_8: 'Пункция образования молочной железы',
        }
    },
    {
        id: 'psychotherapy',
        logo: 'assets/services_logo/psychotherapy.svg',
        category_name: 'Психотерапия',
        medic: 'Психотерапевт',
        services: {
            visit_1: 'Консультация психотерапевта',
            visit_2: 'Психотерапевтический сеанс',
            serv_3: 'Сеансы индивидуальной комплексной терапии зависимостей ',
        }
    },
    {
        id: 'reabilitation',
        logo: 'assets/services_logo/reabilitation.svg',
        category_name: 'Реабилитация',
        medic: 'Реабилитолог',
        services: {
            visit_1: 'Первичный прием врача-реабилитолога',
            serv_0: 'Консультация реабилитолога',
            serv_2: 'Мануальная терапия',
            serv_3: 'Дозированное аппаратное вытяжение',
            serv_4: 'Ударно-волновая терапия',
            serv_5: 'Гидрокинезотерапия',
            serv_6: 'Рефлексотерапия',
            serv_7: 'Карбокситерапия',
            serv_8: 'Фармакопунктура',
            serv_9: 'Кинезиотейпирование',
        }
    },
    {
        id: 'narcology',
        logo: 'assets/services_logo/narcology.svg',
        category_name: 'Наркология',
        medic: 'Нарколог',
        services: {
            visit_1: 'Первичный прием врача-нарколога',
            visit_2: 'Повторный прием врача-нарколога',
            serv_0: 'Консультация нарколога',
            serv_2: 'Лечение зависимостей',
            serv_3: 'Лечение депрессий',
            serv_4: 'Лечение алкоголизма',
            serv_5: 'Лечение табакокурения',
        }
    },
    {
        id: 'stomatology',
        logo: 'assets/services_logo/stomatology.svg',
        category_name: 'Стоматология',
        medic: 'Стоматолог',
        services: {
            visit_1: 'Консультация стоматолога',
            serv_2: 'Диагностика в стоматологии',
            serv_3: 'Отбеливание зубов',
            serv_4: 'Профилактика, гигиена полости рта',
            serv_5: 'Лечение кариеса и пульпита',
            serv_6: 'Детская стоматология',
            serv_7: 'Протезирование зубов',
            serv_8: 'Имплантация зубов',
            serv_9: 'Хирургическая стоматология',
            serv_10: 'Лазерная стоматология',
        }
    },
    {
        id: 'massage',
        logo: 'assets/services_logo/massage.svg',
        category_name: 'Массаж',
        medic: 'Массажист',
        services: {
            visit_1: 'Первичный прием массажиста',
            serv_0: null,
            serv_2: 'Терапевтическая косметология',
            serv_3: 'Косметический массаж лица',
            serv_4: 'Лифтинговый массаж лица ',
            serv_5: 'Массаж детский',
            serv_6: 'Массаж спины',
        }
    },
    {
        id: 'proctology',
        logo: 'assets/services_logo/proctology.svg',
        category_name: 'Проктология',
        medic: 'Проктолог',
        services: {
            visit_1: 'Первичный прием врача-проктолога',
            visit_2: 'Повторный прием врача-проктолога',
            serv_0: 'Консультация диетолога',
            serv_1: 'Лечение геморроя',
            serv_2: 'Лечение трещин прямой кишки',
            serv_3: 'Лечение анального зуда',
            serv_4: 'Лечение запоров, диареи',
            serv_5: 'Лечение острого и хронического колита',
            serv_6: 'Лечение недержания анального сфинктера',
            serv_7: 'Лечение различных травм',
            serv_8: 'Удаление инородных тел',
            serv_9: 'Лечение полипоза',
            serv_10:'Лечение парапроктита, проктита, криптита',
            serv_11: 'Лечение проктосигмоидита',
            serv_12: 'Лечение кондилом перианальных',
            serv_13: 'Лечение врожденных аномалий ректальной области',
            serv_14: 'Лечение копчиковой кисты',
            serv_15: 'Лечение болевого неврологического синдрома',
            serv_16: 'Лечение выпадения прямой кишки',
            serv_17: 'Лечение свищей',
            serv_18: 'Лечение онкологических заболеваний толстого кишечника',
        }
    },
        {
            id: 'procedure',
            logo: 'assets/services_logo/procedure.svg',
            category_name: 'Процедурный кабинет',
            medic: null,
            services: {
                serv_0: null,
                serv_1: 'Внутривенная инъекция без стоимости лекарственного препарата',
                serv_2: 'Внутримышечная инъекция',
                serv_3: 'Подкожная инъекция',
                serv_4: 'Внутривенное капельное введение',
                serv_5: 'Аутогемотерапия',
                serv_6: 'Измерение артериального давления',
            }
    },
    {
        id: 'pulmonology',
        logo: 'assets/services_logo/pulmonology.svg',
        category_name: 'Пульмонология',
        medic: 'Пульмонолог',
        services: {
            visit_1: 'Первичный прием врача-пульмонолога',
            visit_2: 'Повторный прием врача-пульмонолога',
            serv_0: 'Консультация пульмонолога',
            serv_1: 'Внутривенная инъекция без стоимости лекарственного препарата',
            serv_2: 'Внутримышечная инъекция',
            serv_3: 'Подкожная инъекция',
            serv_4: 'Внутривенное капельное введение',
            serv_5: 'Аутогемотерапия',
            serv_6: 'Измерение артериального давления',
        }
    },
    {
        id: 'ortopedy',
        logo: 'assets/services_logo/ortopedy.svg',
        category_name: 'Ортопедия',
        medic: 'Ортопед',
        services: {
            visit_1: 'Первичный прием врача-ортопеда',
            visit_2: 'Повторный прием врача-ортопеда',
            visit_candidate: 'Прием врача-ортопеда, кандидата медицинских наук',
            serv_0: 'Консультация ортопеда',
            serv_1: 'Внутрисуставная блокада',
            serv_2: 'Паравертебральная блокада',
            serv_3: 'Перевязка',

        }
    },
]


let centers = [];




(function(){
    med_centers.map(centerE=>{
        let obj = {};
        obj.center = centerE.fullname;
        obj.services = [];
        let arrServices = Object.keys(centerE.services);
        let arrDetailedKeys = [];
        let arrDetailedValues = [];

        arrServices.map(arrServicesE => {
            let cats = services_category.find(e => e.id === arrServicesE);
            obj.services.push(cats.category_name);

            centerE.services[arrServicesE].map(e => {
                arrDetailedKeys.push(Object.keys(e).flat(Infinity));
            })
            // console.log(cats)
            arrDetailedKeys.map(e=> {
                if (e[0] in cats.services) {     
                    if (cats.services[e[0]]) {arrDetailedValues.push(cats.services[e[0]]);}
                    
                }
            })

        }) 
        const ats = new RegExp('')
        arrDetailedValues = arrDetailedValues.map(e => {
            if (e.match(/Первичный прием/ig)) {
                e = e.replace(/Первичный прием/ig, 'Приём')
            } else if (e.match(/Повторный прием/ig)) {
                e = e.replace(/Повторный прием/ig, 'Приём')
            }
            return e
        })
           
        arrDetailedValues = arrDetailedValues.filter((e,idx, arr) => idx === arr.indexOf(e));

        obj.detailedServices = arrDetailedValues;
        centers.push(obj);
    })


})();

require('fs').writeFile(
    './search_centers.js',
    JSON.stringify(centers, null, '\t'),
    function (err) {
        if (err) {
            console.error('Aaaaa');
        }
    }
);

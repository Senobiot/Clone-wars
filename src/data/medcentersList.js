// The numerical values of the keys 'visit_xxx' / 'serv_xxx' are prices in rubles for doctor's visit and service cost, respectively

export const med_centers = [
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
        iframe: '',
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
                { serv_0: null },
                { serv_1: 14.10 },
                { serv_2: 8.92 },
                { serv_3: 8.80 },
                { serv_4: 21.22 },
                { serv_8: 11.25 },
                { serv_9: 8 },
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
        iframe: '',
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
                    { serv_0: null},
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
        iframe: '',
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
                    { serv_0: null},
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
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
                    { serv_0: null},
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
        iframe: '',
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
                    { serv_0: null},
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
        iframe: '',
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
        iframe: '',
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
        iframe: '',
        coord: '53.924484, 27.633301',
        schedule: '08:00—20:00',
        services: {
            'oftalmology': [ 
                {visit_1: 40 }
            ], 
        }
    },
]
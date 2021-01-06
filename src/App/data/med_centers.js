// numbers are prices for services

const med_centers = [
    {
        name: 'Альфамед',
        fullname: 'Медицинский центр «Альфамед»',
        adress: 'г.Минск, пр-т Независимости, 85',
        img: './centers_img/alfamed.jpg',
        coord: '53.919774, 27.601318',
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
                 {serv_1 : 47},
                 {serv_2 : 28 },
                 {serv_3 : 30 },
                 {serv_5 : 31},
                 {serv_5 : 20 },
                 {serv_6 : 25 },
                 {serv_7 : 38},
                 {serv_8 : 20},
                 {serv_9 : 24},
                 {serv_10 : 32},
                 {serv_11 : 27},
                 {serv_12 : 35 },
                 {serv_13 : 40},
                 {serv_14 : 45},
                 {serv_15 : 28 },
                 {serv_16 : 45},
                 {serv_18 : 69},
                 {serv_19 : 0},
                 {serv_20 : 26},
                 {serv_22 : 47 },
                 {serv_23 : 25 }
                ],
            }
    },
    {
        name: 'Доктор Профи',
        fullname: 'Медицинский центр «Доктор Профи»',
        adress: 'Минск, д. Копище, ул. Лопатина, 7а/2',
        img: './centers_img/doctor_profi.jpg',
        coord: '53.953662, 27.678280',
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
        img: './centers_img/rkmc.jpg',
        coord: '53.962129, 27.434541',
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

]
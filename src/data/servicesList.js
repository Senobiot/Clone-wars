const services_category = [
    {
        id: 'uzi_diagnistic',
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
        category_name: 'Хирургия',
        medic: 'Хирург',
        services: {
            visit_1: 'Первичный прием врача-хирурга',
            visit_2: 'Повторный прием врача-хирурга',
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
        }
    },
    {
        id: 'mammology',
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
        category_name: 'Психотерапия',
        medic: 'Психотерапевт',
        services: {
            serv_0: 'Консультация психотерапевта',
            serv_2: 'Психотерапевтический сеанс',
            serv_3: 'Сеансы индивидуальной комплексной терапии зависимостей ',
        }
    },
    {
        id: 'reabilitation',
        category_name: 'Реабилитация',
        medic: 'Реабилитолог',
        services: {
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
        category_name: 'Наркология',
        medic: 'Нарколог',
        services: {
            serv_0: 'Консультация нарколога',
            serv_2: 'Лечение зависимостей',
            serv_3: 'Лечение депрессий',
            serv_4: 'Лечение алкоголизма',
            serv_5: 'Лечение табакокурения',
        }
    },
    {
        id: 'stomatology',
        category_name: 'Стоматология',
        medic: 'Стоматолог',
        services: {
            serv_0: 'Консультация стоматолога',
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
        category_name: 'Массаж',
        medic: 'Массажист',
        services: {
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
export default services_category;

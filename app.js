let book =
    {
        readership: 'Учащимся', //Целевая аудитория
        subject: 'Природоведение. Окружающий мир', //Предмет
        materialType : 'Учебники', //Тип материала
        fgos: true, //Соответствие стандарту (ФГОС)
        publicationLang: 'Русский', //Язык издания
        mediaType: 'Печатная книга', //Тип носителя
        name: 'Окружающий мир. 4 класс. Учебник. В 2-х частях Часть 1',
        year: 2020,
        series: 'Школа России',
        publisher: 'Просвещение',
        cover_type: 'мягкий',
        description: 'Учебник "Окружающий мир" входит в образовательную систему "Школа России". Материал учебника позволяет реализовать системно- деятельностный подход, организовать дифференцированное обучение и обеспечивает достижение личностных, предметных и метапредметных результатов освоения Основной образовательной программы начального общего образования.',
        pages: 160,
        weight:
            {
            kg: '0,3',// TODO как здесь ставить запятые?
            pounds: '0,1',// TODO как здесь ставить запятые?
            },
        author: ['Плешаков Андрей Анатольевич', 'Крючкова Елена Алексеевна',],
        price:
            {
            ruble: 635,
            dollar: 10,
            },
        contents:
            [
                {
                    part: 'Земля и человечество',
                    chapters:
                        [
                        {'Мир глазами астронома': 4,},
                        {'Планеты Солнечной системы': 9,},
                        {'Звёздное небо — Великая книга Природы': 16,},
                        {'Мир глазами географа': 22,},
                        {'Мир глазами историка': 29,},
                        {'Когда и где?': 36,},
                        {'Мир глазами эколога': 41,},
                        {'Сокровища Земли под охраной человечества': 48,},
                        ]
                },


                {
                    part: 'Природа России',
                    chapters:
                        [
                            {'Равнины и горы России': 60,},
                            {'Моря, озёра и реки России': 66,},
                            {'Природные зоны России': 71,},
                            {'Зона арктических пустынь': 76,},
                            {'Тундра': 84,},
                            {'Леса России': 95,},
                            {'Лес и человек': 103,},
                            {'Зона степей': 110,},
                            {'Пустыни': 118,},
                            {'У Чёрного моря': 126,},
                        ]

                },

                {
                    part: 'Родной край — часть большой страны',
                    chapters:
                        [
                            {'Наш край': 138,},
                            {'Поверхность нашего края': 139,},
                            {'Водные богатства нашего края': 145,},
                            {'Наши подземные богатства': 149,},
                            {'Земля-кормилица': 160,},
                            {'Жизнь леса': 164,},
                            {'Жизнь луга': 170,},
                            {'Жизнь в пресных водах': 178,},
                            {'Растениеводство в нашем крае': 187,},
                            {'Животноводство в нашем крае': 195,},
                        ]
                },

                {'Наши проекты': 204},
                {'Проверим себя и оценим свои достижения': 206},// TODO раздел и 3 подраздела ниже
                {'Раздел «Земля и человечество»': 206},// TODO подраздел
                {'Раздел «Природа России»': 209},// TODO подраздел
                {'Раздел «Родной край — часть большой страны»': 214},// TODO подраздел
                {'Странички для самопроверки': 219},
            ]
    }
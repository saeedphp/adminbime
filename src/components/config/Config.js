export const BASE_URL = 'https://bimeharman.faradns.ir/api/v1.0/';
export const BASE_IMAGE_URL = 'https://bimeharman.faradns.ir/';
export const BASE_SIGNUP_URL = 'https://bimeharman.faradns.ir/';
export const BASE_ADD_USER_URL = 'https://bimepanel.vercel.app/'

export const Elements = {
    states: {
        metaTitle: 'استان ها',
        list_route: "basicdata/state/active",
        detail_route: "basicdata/state/",
        create_route: "basicdata/state/",
        list_fields: [
            {
                name: "name",
                title: "نام استان",
            },
            {
                name: "description",
                title: "توضیحات",
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "name",
                title: "نام استان",
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
        ]
    },
    cities: {
        metaTitle: 'شهرها',
        list_route: "basicdata/city/active",
        detail_route: "basicdata/city/",
        create_route: "basicdata/city/",
        list_fields: [
            {
                name: "name",
                title: "نام شهر"
            },
            {
                name: "stateInfo",
                title: "نام استان",
                type: "object",
                object_field: "name"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            }
        ],
        form_fields: [
            {
                name: "name",
                title: "نام شهر"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "hidden",
                default: "desc",
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateInfo",
                    value: "id",
                }
            }
        ]
    },
    addresses: {
        metaTitle: 'آدرس ها',
        list_route: "cms/address/active?pageIndex=0&pageSize=50",
        detail_route: "cms/address/",
        create_route: "cms/address/",
        list_fields: [
            {
                name: "exactAddress",
                title: "آدرس"
            },
            {
                name: "stateInfo",
                title: "نام استان",
                type: "object",
                object_field: 'name'
            },
            {
                name: "cityInfo",
                title: "نام شهر",
                type: "object",
                object_field: "name"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "exactAddress",
                title: "آدرس پستی"
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateInfo",
                    value: "id",
                }
            },
            {
                name: "cityId",
                title: "شهر",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: 'boolean'
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    blogCategories: {
        metaTitle: 'دسته بندی اخبار',
        list_route: "cms/blogcategory/list/active",
        detail_route: "cms/blogcategory/",
        create_route: "cms/blogcategory/",
        list_fields: [
            {
                name: "name",
                title: "عنوان"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "name",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    BlogPosts: {
        metaTitle: 'اخبار و مقالات',
        list_route: "cms/blogpost/active",
        detail_route: "cms/blogpost/",
        create_route: "cms/blogpost/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "insertTime",
                title: "تاریخ"
            },
            {
                name: "body",
                title: "توضیحات"
            },
            {
                name: "blogCategories",
                title: "دسته",
                type: "list",
                object_field: "name"
            },
            {
                name: "pictureId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "picture",
                    value: "id",
                    url: "url"
                }
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "body",
                title: "توضیحات",
                type: 'texteditor',
            },
            {
                name: "pictureId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "picture",
                    value: "id",
                    url: "url"
                },
            },
            {
                name: "blogTypeId",
                title: "نوع بلاگ",
                type: "dropdown",
                dropdown: {
                    route: "cms/blogtype/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "blogTypeId",
                    value: "id",
                }
            },
            {
                name: "blogCategoryId",
                title: "دسته",
                type: "dropdown",
                dropdown: {
                    route: "cms/blogcategory/list/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "blogCategories",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
        ]
    },
    blogTypes: {
        metaTitle: 'نوع خبر',
        list_route: "cms/blogtype/active",
        detail_route: "cms/blogtype/",
        create_route: "cms/blogtype/",
        list_fields: [
            {
                name: "name",
                title: "عنوان نوع بلاگ"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "name",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    faqs: {
        list_route: "cms/faq/active?pageIndex=0&pageSize=50",
        detail_route: "cms/faq/",
        create_route: "cms/faq/",
        list_fields: [
            {
                name: "question",
                title: "سوال"
            },
            {
                name: "answer",
                title: "پاسخ"
            }
        ],
        form_fields: [
            {
                name: "question",
                title: "سوال"
            },
            {
                name: "answer",
                title: "پاسخ"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number",
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    healthCenters: {
        metaTitle: 'مراکز درمانی',
        list_route: "cms/healthCenter/active?pageIndex=0&pageSize=100",
        detail_route: "cms/healthCenter/",
        create_route: "cms/healthCenter/",
        list_fields: [
            {
                name: "center",
                title: "مرکز"
            },
            {
                name: "centerName",
                title: "نام مرکز"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "exactAddress",
                title: "آدرس",
            },
            {
                name: "cityGetResponseDto",
                title: "نام شهر",
                type: "object",
                object_field: "name"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "center",
                title: "مرکز"
            },
            {
                name: "centerName",
                title: "نام مرکز"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "exactAddress",
                title: "آدرس",
            },
            {
                name: "cityId",
                title: "شهر مربوطه",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityGetResponseDto",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    HealthCenterPdfs: {
        metaTitle: 'pdf مراکز درمانی',
        list_route: "cms/healthCenterPdf/active?pageIndex=0&pageSize=100",
        detail_route: "cms/healthCenterPdf/",
        create_route: "cms/healthCenterPdf/",
        list_fields: [
            {
                name: "stateGetResponseDto",
                title: "نام استان",
                type: "object",
                object_field: "name"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان فایل",
                type: "hidden",
                default: "state name",
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateGetResponseDto",
                    value: "id",
                }
            },
            {
                name: "customFileId",
                title: "فایل pdf",
                type: "pdfFile",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    GeneralRule: {
        metaTitle: 'قوانین عمومی',
        list_route: "cms/generalRule/active?pageIndex=0&pageSize=20",
        detail_route: "cms/generalRule/",
        create_route: "cms/generalRule/",
        list_fields: [
            {
                name: "title",
                title: "نام"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "نام"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "texteditor"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    GeneralCondition: {
        metaTitle: 'شرایط عمومی',
        list_route: "cms/generalCondition/active?pageIndex=0&pageSize=100",
        detail_route: "cms/generalCondition/",
        create_route: "cms/generalCondition/",
        list_fields: [
            {
                name: "title",
                title: "نام"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "نام"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "texteditor"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    RepresentationConditions: {
        metaTitle: 'شرایط نمایندگی',
        list_route: "cms/representationCondition/active?pageIndex=0&pageSize=100",
        detail_route: "cms/representationCondition/",
        create_route: "cms/representationCondition/",
        list_fields: [
            {
                name: "title",
                title: "نام"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "نام"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "texteditor"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    images: {
        list_route: "cms/image/active?pageIndex=0&pageSize=50",
        detail_route: "cms/image/",
        create_route: "cms/image/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "customFileId",
                title: "فایل",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            },
        ]
    },
    Regulation: {
        metaTitle: 'شرایط عضویت',
        list_route: "cms/regulation/active?pageIndex=0&pageSize=50",
        detail_route: "cms/regulation/",
        create_route: "cms/regulation/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: 'boolean'
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065,
            },
            {
                name: "customFileId",
                title: "فایل مربوطه",
                type: "hidden",
                default: 400,
            }
        ]
    },
    insurances: {
        metaTitle: 'محصولات',
        list_route: "cms/insurance/active?pageIndex=0&pageSize=100",
        detail_route: "cms/insurance/",
        create_route: "cms/insurance/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "iconInfo",
                title: "تصویر",
                type: "image",
                get: {
                    field: "iconInfo",
                    value: "id",
                    url: "url",
                    object_field: 'url'
                }
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "imageId",
                title: "تصویر",
                type: "hidden",
                default: 400,
            },
            {
                name: "iconId",
                title: "آیکون",
                type: "image",
                get: {
                    field: "iconInfo",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    insuranceInfos: {
        metaTitle: 'جزئیات محصولات',
        list_route: "cms/insuranceInfo/active?pageIndex=0&pageSize=50",
        detail_route: "cms/insuranceInfo/",
        create_route: "cms/insuranceInfo/",
        list_fields: [
            {
                name: "insuranceDetail",
                title: "نوع بیمه",
                type: "object",
                object_field: "title"
            },
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: 'texteditor'
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "texteditor"
            },
            {
                name: "insuranceId",
                title: "بیمه",
                type: "dropdown",
                dropdown: {
                    route: "cms/insurance/active?pageIndex=0&pageSize=50",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "insuranceDetail",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    jobPositions: {
        metaTitle: 'عنوان های شغلی',
        list_route: "cms/jobPosition/active?pageIndex=0&pageSize=50",
        detail_route: "cms/jobPosition/",
        create_route: "cms/jobPosition/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "category",
                title: "دسته بندی",
                type: "hidden",
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    pdfs: {
        metaTitle: 'بروشور',
        list_route: "cms/pdf/active?pageIndex=0&pageSize=50",
        detail_route: "cms/pdf/",
        create_route: "cms/pdf/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "pictureId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "hidden",
                default: "desc"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "imageId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "customFileId",
                title: "فایل pdf",
                type: "pdfFile",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            },
        ]
    },
    Representationes: {
        metaTitle: 'شعب بیمه آرمان',
        list_route: "cms/representation/active?pageIndex=0&pageSize=50",
        detail_route: "cms/representation/",
        create_route: "cms/representation/",
        list_fields: [
            {
                name: "branchName",
                title: "نام شعبه"
            },
            {
                name: "branchManager",
                title: "مدیر شعبه"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "stateInfo",
                title: "نام استان",
                type: "object",
                object_field: "name"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "branchName",
                title: "نام شعبه"
            },
            {
                name: "branchManager",
                title: "مدیر شعبه"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "postalCode",
                title: "کد پستی"
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateInfo",
                    value: "id",
                }
            },
            {
                name: "cityId",
                title: "شهر",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "exactAddress",
                title: "آدرس"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    DamageCenters: {
        metaTitle: 'شعب دریافت خسارت',
        list_route: "cms/damageCenter/active?pageIndex=0&pageSize=100",
        detail_route: "cms/damageCenter/",
        create_route: "cms/damageCenter/",
        list_fields: [
            {
                name: "branchName",
                title: "نام شعبه"
            },
            {
                name: "branchManager",
                title: "مدیر شعبه"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "stateInfo",
                title: "نام استان",
                type: "object",
                object_field: "name"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "branchName",
                title: "نام شعبه"
            },
            {
                name: "branchManager",
                title: "مدیر شعبه"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "postalCode",
                title: "کد پستی"
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateInfo",
                    value: "id",
                }
            },
            {
                name: "cityId",
                title: "شهر",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "exactAddress",
                title: "آدرس"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    revelations: {
        metaTitle: 'گزارش گیری',
        list_route: "cms/revelation/active?pageIndex=0&pageSize=50",
        detail_route: "cms/revelation/",
        create_route: "cms/revelation/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "customeFileId",
                title: "فایل pdf",
                type: "hidden",
                default: 400,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065,
            }
        ]
    },
    revelationAttributes: {
        metaTitle: 'ویژگی گزارش گری',
        list_route: "cms/revelationAttribute/active?pageIndex=0&pageSize=100",
        detail_route: "cms/revelationAttribute/",
        create_route: "cms/revelationAttribute/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "revelationGetResponseDto",
                title: "عنوان گزارشگری",
                type: "object",
                object_field: "title"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "customFileId",
                title: "فایل pdf",
                type: "pdfFile",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "revelationId",
                title: "عنوان گزارشگری",
                type: "dropdown",
                dropdown: {
                    route: "cms/revelation/active?pageIndex=0&pageSize=50",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "revelationGetResponseDto",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    sliderItems: {
        metaTitle: 'بنر',
        list_route: "cms/sliderItem/active?pageIndex=0&pageSize=100",
        detail_route: "cms/sliderItem/",
        create_route: "cms/sliderItem/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "pictureId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "aboutUsSlider",
                title: "اسلایدر درباره ما",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "customFileId",
                title: "تصویر اسلاید",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    suggestions: {
        metaTitle: 'فرم پیشنهادات',
        list_route: "cms/suggustion/active?pageIndex=0&pageSize=100",
        detail_route: "cms/suggustion/",
        create_route: "cms/suggustion/",
        list_fields: [
            {
                name: "fullName",
                title: "نام"
            },
            {
                name: "mobileNumber",
                title: "شماره تماس"
            },
            {
                name: "text",
                title: "متن"
            }
        ],
        form_fields: [
            {
                name: "fullName",
                title: "نام"
            },
            {
                name: "mobileNumber",
                title: "شماره تماس"
            },
            {
                name: "text",
                title: "متن",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "customFileId",
                title: "فایل مربوطه",
                type: "image",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    ContactUs: {
        metaTitle: 'فرم تماس با ما',
        list_route: "cms/contactUs/list/active?pageIndex=0&pageSize=100",
        detail_route: "cms/contactUs/",
        create_route: "cms/contactUs/",
        list_fields: [
            {
                name: "fullName",
                title: "نام"
            },
            {
                name: "mobileNumber",
                title: "شماره تماس"
            },
            {
                name: "text",
                title: "متن"
            }
        ],
    },
    users_bime: {
        metaTitle: 'مدیریت و اعضای هیئت مدیره بیمه آرمان',
        list_route: "cms/user/active?pageIndex=0&pageSize=100",
        detail_route: "cms/user/",
        create_route: "cms/user/",
        list_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "email",
                title: "ایمیل"
            },
            {
                name: "mobileNumber",
                title: "موبایل"
            },
            {
                name: "position",
                title: "موقعیت شغلی"
            },
            {
                name: "customFileGetResponseDto",
                title: "تصویر",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "userName",
                title: "نام کاربری",
                type: "hidden",
                default: "username",
            },
            {
                name: "password",
                title: "رمز عبور",
                type: "hidden",
                default: "password123@"
            },
            {
                name: "email",
                title: "ایمیل",
                type: "text"
            },
            {
                name: "mobileNumber",
                title: "شماره همراه",
            },
            {
                name: "position",
                title: "موقعیت شغلی",
            },
            {
                name: "gender",
                title: "جنسیت",
                type: "hidden",
                default: 'gender'
            },
            {
                name: "age",
                title: "سن",
                type: "hidden",
                default: 20
            },
            {
                name: "nationalCode",
                title: "کد ملی",
                type: "hidden",
                default: "1234567890"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "customFileId",
                title: "فایل",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "jobPositionId",
                title: "دسته",
                type: "dropdown",
                dropdown: {
                    route: "cms/jobPosition/active?pageIndex=0&pageSize=200",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "jobPositionGetResponseDto",
                    value: "id",
                }
            },
        ]
    },
    vendorings: {
        list_route: "cms/vendoring/active?pageIndex=0&pageSize=100",
        detail_route: "cms/vendoring/",
        create_route: "cms/vendoring/",
        list_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "fatherName",
                title: "نام پدر"
            },
            {
                name: "gender",
                title: "جنسیت"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "fatherName",
                title: "نام پدر"
            },
            {
                name: "gender",
                title: "جنسیت"
            },
            {
                name: "nationalCode",
                title: "کد ملی",
            },
            {
                name: "mobileNumber",
                title: "شماره تماس",
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "degreeOfEducation",
                title: "سطح تحصیلات",
            },
            {
                name: "fieldOfStudy",
                title: "زمینه تحصیل",
            },
            {
                name: "militaryService",
                title: "سرویس",
            },
            {
                name: "stateInfo",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "cityInfocityInfo",
                title: "شهر",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: 'boolean'
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                value: "default",
                type: "hidden"
            },
            {
                name: "birthDay",
                title: "تولد",
            },
            {
                name: "",
                title: "کد",
            },
            {
                name: "workExperience",
                title: "تجربه",
            },
            {
                name: "ordering",
                title: "ترتیب",
            },
        ]
    },
    visions: {
        metaTitle: 'چشم انداز',
        list_route: "cms/vision/active?pageIndex=0&pageSize=100",
        detail_route: "cms/vision/",
        create_route: "cms/vision/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "texteditor"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "customFileId",
                title: "تصویر مربوطه",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    visionAttributes: {
        metaTitle: 'ویژگی های چشم انداز',
        list_route: "cms/visionAttribute/active?pageIndex=0&pageSize=100",
        detail_route: "cms/visionAttribute/",
        create_route: "cms/visionAttribute/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان",
                type: "texteditor"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    PersonnelPanelCategory: {
        metaTitle: 'دسته بندی پنل پرسنل',
        list_route: "cms/personnelPanelCategory/active?pageIndex=0&pageSize=100",
        detail_route: "cms/personnelPanelCategory/",
        create_route: "cms/personnelPanelCategory/",
        list_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    PersonnelPanel: {
        metaTitle: 'آیتم های دانلودی پنل پرسنل',
        list_route: "cms/personnelPanel/active?pageIndex=0&pageSize=10",
        detail_route: "cms/personnelPanel/",
        create_route: "cms/personnelPanel/",
        list_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                name: "description",
                title: "توضیحات",
            },
            {
                name: "personnelPanelCategoryGetResponse",
                title: "نام دسته",
                type: "object",
                object_field: "title"
            },
            {
                name: "customFileGetResponseDto",
                title: "فایل",
                type: "object",
                object_field: "url"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "panelCategoryId",
                title: "دسته",
                type: "dropdown",
                dropdown: {
                    route: "cms/personnelPanelCategory/active?pageIndex=0&pageSize=10",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "personnelPanelCategoryGetResponse",
                    value: "id",
                }
            },
            {
                name: "customFileId",
                title: "فایل pdf",
                type: "pdfFile",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            },
        ]
    },
    PersonalLinks: {
        metaTitle: 'لینک های مفید پرسنل',
        list_route: "cms/usefulLink/list/personnelLink?pageIndex=0&pageSize=20",
        detail_route: "cms/usefulLink/",
        create_route: "cms/usefulLink/",
        list_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                name: "url",
                title: "لینک"
            },
            {
                name: "isPersonnel",
                title: "پنل پرسنل",
                type: "boolean",
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "لینک"
            },
            {
                name: "isPersonnel",
                title: "پرسنل",
                type: "boolean",
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "fileId",
                title: "فایل pdf",
                type: "hidden",
                default: 400,
            },
        ]
    },
    RepresentativePanelCategory: {
        metaTitle: 'دسته بندی پنل نمایندگان',
        list_route: "cms/representativePanelCategory/active?pageIndex=0&pageSize=100",
        detail_route: "cms/representativePanelCategory/",
        create_route: "cms/representativePanelCategory/",
        list_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    RepresentativePanel: {
        metaTitle: 'آیتم های دانلودی نماینده',
        list_route: "cms/representativePanel/active?pageIndex=0&pageSize=100",
        detail_route: "cms/representativePanel/",
        create_route: "cms/representativePanel/",
        list_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                name: "description",
                title: "توضیحات",
            },
            {
                name: "representativePanelCategoryGetResponse",
                title: "نام دسته",
                type: "object",
                object_field: "title"
            },
            {
                name: "customFileGetResponseDto",
                title: "فایل",
                type: "object",
                object_field: "url"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "panelCategoryId",
                title: "دسته",
                type: "dropdown",
                dropdown: {
                    route: "cms/representativePanelCategory/active?pageIndex=0&pageSize=100",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "representativePanelCategoryGetResponse",
                    value: "id",
                }
            },
            {
                name: "customFileId",
                title: "فایل pdf",
                type: "pdfFile",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            },
        ]
    },
    VendorsLinks: {
        metaTitle: 'لینک های مفید نماینده',
        list_route: "cms/usefulLink/list/representationLink?pageIndex=0&pageSize=12",
        detail_route: "cms/usefulLink/",
        create_route: "cms/usefulLink/",
        list_fields: [
            {
                name: "title",
                title: "نام",
            },
            {
                name: "url",
                title: "لینک"
            },
            {
                name: "isRepresention",
                title: "پنل نماینده",
                type: "boolean",
            },
            /*{
                name: "iconId",
                title: "آیکون",
                type: "image",
                get: {
                    field: "iconInfo",
                    value: "id",
                    url: "url"
                }
            },*/
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "لینک"
            },
            {
                name: "isRepresention",
                title: "نماینده",
                type: "boolean",
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            /*{
                name: "iconId",
                title: "آیکون",
                type: "image",
                get: {
                    field: "iconInfo",
                    value: "id",
                    url: "url"
                }
            },*/
            {
                name: "fileId",
                title: "فایل pdf",
                type: "hidden",
                default: 400,
            },
        ]
    },
    SocialMedia: {
        metaTitle: 'شبکه های اجتماعی',
        list_route: "cms/socialMedia/active?pageIndex=0&pageSize=20",
        detail_route: "cms/socialMedia/",
        create_route: "cms/socialMedia/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "لینک"
            },
            {
                name: "customFileId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "لینک"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: 'boolean'
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "customFileId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            },
        ]
    },
    MenuItems: {
        metaTitle: 'منو',
        list_route: "cms/menuitem/list/active",
        detail_route: "cms/menuitem/",
        create_route: "cms/menuitem/",
        list_fields: [
            {
                name: "id",
                title: "ردیف"
            },
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد"
            },
            /*{
                name: "firstFooter",
                title: "فوتر اول",
                type: "boolean",
            },
            {
                name: "secendFooter",
                title: "فوتر دوم"
            },
            {
                name: "thirdFooter",
                title: "فوتر سوم"
            },*/
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد",
                type: "dropdown",
                dropdown: {
                    route: "cms/menuitem/list",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "title",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "فعال بودن",
                type: "hidden",
                default: 1065,
            },
        ]
    },
    FirstFooter: {
        metaTitle: 'فوتر ستون اول',
        list_route: "cms/menuitem/list/FirstFooterList",
        detail_route: "cms/menuitem/",
        create_route: "cms/menuitem/",
        list_fields: [
            {
                name: "id",
                title: "شماره"
            },
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد",
                type: "dropdown",
                dropdown: {
                    route: "cms/menuitem/list/FirstFooterList",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "title",
                    value: "id",
                }
            },
            {
                name: "firstFooter",
                title: "در فوتر اول",
                type: "boolean"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
        ]
    },
    SecondFooter: {
        metaTitle: 'فوتر ستون دوم',
        list_route: "cms/menuitem/list/SecendFooterList",
        detail_route: "cms/menuitem/",
        create_route: "cms/menuitem/",
        list_fields: [
            {
                name: "id",
                title: "شماره"
            },
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد",
                type: "dropdown",
                dropdown: {
                    route: "cms/menuitem/list/SecendFooterList",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "title",
                    value: "id",
                }
            },
            {
                name: "secendFooter",
                title: "در فوتر دوم",
                type: "boolean"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
        ]
    },
    ThirdFooter: {
        metaTitle: 'فوتر ستون سوم',
        list_route: "cms/menuitem/list/ThirdFooterList",
        detail_route: "cms/menuitem/",
        create_route: "cms/menuitem/",
        list_fields: [
            {
                name: "id",
                title: "شماره"
            },
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد"
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد",
                type: "dropdown",
                dropdown: {
                    route: "cms/menuitem/list/ThirdFooterList",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "title",
                    value: "id",
                }
            },
            {
                name: "thirdFooter",
                title: "در فوتر سوم",
                type: "boolean"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0,
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
        ]
    },
    users: {
        metaTitle: 'کاربران',
        list_route: "cms/menuitem/list/FirstFooterList",
        detail_route: "cms/menuitem/",
        create_route: "cms/menuitem/",
        list_fields: [
            {
                name: "id",
                title: "شماره"
            },
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد"
            },
            {
                name: "firstFooter",
                title: "فوتر اول",
                type: "boolean",
            },
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "url",
                title: "آدرس"
            },
            {
                name: "parentId",
                title: "والد"
            },
            {
                name: "firstFooterfirstFooter",
                title: "در فوتر اول",
                type: "boolean"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 0
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
        ]
    },
    PersonalUsers: {
        metaTitle: 'کاربران پرسنل',
        list_route: "cms/PersonnelAndRepresentation/list/personnel?pageIndex=0&pageSize=100",
        detail_route: "cms/PersonnelAndRepresentation/",
        create_route: "cms/PersonnelAndRepresentation/",
        list_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "phoneNumber",
                title: "شماره همراه"
            },
            {
                name: "email",
                title: "ایمیل"
            },
            {
                name: "userName",
                title: "نام کاربری",
            },
            {
                name: "accessLevel",
                title: "نوع کاربر",
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'ویرایش رمز',
                type: 'resetPassword',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "phoneNumber",
                title: "شماره همراه"
            },
            {
                name: "email",
                title: "ایمیل"
            },
            {
                name: "userName",
                title: "نام کاربری",
            },
            {
                name: "password",
                title: "رمز عبور",
                type: 'hidden',
            },
            {
                name: "accessLevel",
                title: "سطح دسترسی",
                type: 'levelDropdown',
            },
        ]
    },
    VendorsUsers: {
        metaTitle: 'کاربران نماینده',
        list_route: "cms/PersonnelAndRepresentation/Representation?pageIndex=0&pageSize=100",
        detail_route: "cms/PersonnelAndRepresentation/",
        create_route: "cms/PersonnelAndRepresentation/",
        list_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "phoneNumber",
                title: "شماره همراه"
            },
            {
                name: "email",
                title: "ایمیل"
            },
            {
                name: "userName",
                title: "نام کاربری",
            },
            {
                name: "accessLevel",
                title: "نوع کاربر",
            },
            {
                title: 'ویرایش',
                type: 'btn',
            },
            {
                title: 'ویرایش رمز',
                type: 'resetPassword',
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "phoneNumber",
                title: "شماره همراه"
            },
            {
                name: "email",
                title: "ایمیل"
            },
            {
                name: "userName",
                title: "نام کاربری",
            },
            {
                name: "password",
                title: "رمز عبور",
                type: 'hidden',
            },
            {
                name: "accessLevel",
                title: "سطح دسترسی",
                type: 'levelDropdown',
            },
        ],
    },
    setting: {
        metaTitle: 'تنطیمات',
        list_route: "cms/setting/",
        detail_route: "cms/setting/",
        create_route: "cms/setting/",
        list_fields: [
            {
                name: "name",
                title: "نام"
            },
            {
                name: "value",
                title: "مقدار"
            },
            {
                title: 'حذف',
                type: 'removeBtn',
            },
        ],
        form_fields: [
            {
                name: "name",
                title: "نام"
            },
            {
                name: "value",
                title: "مقدار",
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    }
}
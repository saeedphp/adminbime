export const BASE_URL = 'https://mammutapi.faradns.ir/';
export const BASE_IMAGE_URL = 'https://bimeharman.faradns.ir/';

export const Elements = {
    states: {
        list_route: "api/v1.0/basicdata/state/active",
        detail_route: "api/v1.0/basicdata/state/",
        create_route: "api/v1.0/basicdata/state",
        list_fields: [
            {
                name: "name",
                title: "نام استان",
            },
            {
                name: "description",
                title: "توضیحات",
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
                type: "texteditor"
            },
        ]
    },
    cities: {
        list_route: "api/v1.0/basicdata/city/active",
        detail_route: "api/v1.0/basicdata/city/",
        create_route: "api/v1.0/basicdata/city",
        list_fields: [
            {
                name: "name",
                title: "نام شهر"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "stateInfo",
                title: "نام استان",
                type: "object",
                object_field: "name"
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
                type: "textarea"
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "api/v1.0/basicdata/state/active",
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
    blogCategories: {
        list_route: "api/v1.0/cms/blogcategory/active",
        detail_route: "api/v1.0/cms/blogcategory/",
        create_route: "api/v1.0/cms/blogcategory",
        list_fields: [
            {
                name: "name",
                title: "عنوان"
            }
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
                default: 1
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
    blogPosts: {
        list_route: "api/v1.0/cms/blogpost/active",
        detail_route: "api/v1.0/cms/blogpost/",
        create_route: "api/v1.0/cms/blogpost",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "blogTypeName",
                title: "نوع پست"
            }
        ],
        form_fields: [
            {
                name: "Title",
                title: "عنوان"
            },
            {
                name: "Body",
                title: "محتوا",
                type: "texteditor"
            },
            {
                name: "BlogTypeId",
                title: "نوع پست",
                type: "dropdown",
                dropdown: {
                    route: "api/v1.0/cms/blogtype/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "blogTypeInfo",
                    value: "id",
                }
            },
            {
                name: "PictureId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "picture",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "Ordering",
                title: "ترتیب",
                type: "hidden",
                default: 1
            },
            {
                name: "IsActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "CultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            }
        ]
    },
    blogTypes: {
        list_route: "api/v1.0/cms/blogtype/active",
        detail_route: "api/v1.0/cms/blogtype/",
        create_route: "api/v1.0/cms/blogtype",
        list_fields: [
            {
                name: "name",
                title: "عنوان نوع بلاگ"
            }
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
                default: 1
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
    conexProducts: {
        list_route: "api/v1.0/cms/conexProduct/active",
        detail_route: "api/v1.0/cms/conexProduct/",
        create_route: "api/v1.0/cms/conexProduct",
        list_fields: [
            {
                name: "name",
                title: "نام"
            },
            {
                name: "shortDescription",
                title: "توضیحات مختصر"
            }
        ],
        form_fields: [
            {
                name: "Name",
                title: "نام"
            },
            {
                name: "ShortDescription",
                title: "توضیحات مختصر",
                type: "texteditor"
            },
            {
                name: "Description",
                title: "توضیحات",
                type: "texteditor"
            },
            {
                name: "AdvicePhoneNumber",
                title: "شماره تلفن مشاوره"
            },
            {
                name: "ConexMapPictureId",
                title: "تصویر کانکس",
                type: "image",
                get: {
                    field: "picture",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "Ordering",
                title: "ترتیب",
                type: "hidden",
                default: 1
            },
            {
                name: "IsActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "CultureLcid",
                title: "شناسه زبان",
                type: "hidden",
                default: 1065
            },
            {
                name: "SeoTitle",
                title: "عنوان سئو"
            },
            {
                name: "SeoDescription",
                title: "توضیحات سئو",
                type: "textarea"
            }
        ]
    },
    conexProductAttribute: {
        list_route: "api/v1.0/cms/conexproductattribute/active",
        detail_route: "api/v1.0/cms/conexproductattribute/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
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
                name: "conexProductId",
                title: "شناسه محصول کانکس"
            },
            {
                name: "ordering",
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن"
            }
        ]
    },
    conexProductImage: {
        list_route: "api/v1.0/cms/conexproductimage/active",
        detail_route: "api/v1.0/cms/conexproductimage/",
        list_fields: [
            {
                name: "ConexProductId",
                title: "شناسه محصول کانکس"
            },
            {
                name: "PictureId",
                title: "شناسه تصویر"
            }
        ],
        form_fields: [
            {
                name: "ConexProductId",
                title: "شناسه محصول کانکس"
            },
            {
                name: "PictureId",
                title: "شناسه تصویر"
            },
            {
                name: "Ordering",
                title: "ترتیب"
            },
            {
                name: "IsActive",
                title: "فعال بودن"
            }
        ]
    },
    contracts: {
        list_route: "api/v1.0/cms/contract/active",
        detail_route: "api/v1.0/cms/contract/",
        create_route: "api/v1.0/cms/contract",
        list_fields: [
            {
                name: "legalPersonName",
                title: "نام"
            },
            {
                name: "ceo",
                title: "مدیر عامل"
            },
            {
                name: "representationCode",
                title: "کد نمایندگی"
            }
        ],
        form_fields: [
            {
                name: "legalPersonName",
                title: "نام"
            },
            {
                name: "ceo",
                title: "مدیر عامل"
            },
            {
                name: "representationCode",
                title: "کد نمایندگی"
            },
            {
                name: "address",
                title: "آادرس",
                type: "textarea"
            },
            {
                name: "nationalId",
                title: "کد ملی"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "homeNumber",
                title: "شماره ثابت"
            },
            {
                name: "representationExpert",
                title: "کارشناس"
            },
            {
                name: "representationValidityStartDateTime",
                title: "زمان شروع"
            },
            {
                name: "representationValidityEndDateTime",
                title: "زمان پایان"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "hidden",
                default: 1
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            },
            {
                name: "userId",
                title: "شناسه کاربر"
            }
        ]
    },
    faqs: {
        list_route: "api/v1.0/cms/faq/active?pageIndex=0&pageSize=50",
        detail_route: "api/v1.0/cms/faq/",
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
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    ourCustomers: {
        list_route: "api/v1.0/cms/ourcustomer/active",
        detail_route: "api/v1.0/cms/ourcustomer/",
        list_fields: [
            {
                name: "Name",
                title: "نام"
            }
        ],
        form_fields: [
            {
                name: "Name",
                title: "نام"
            },
            {
                name: "Ordering",
                title: "ترتیب"
            },
            {
                name: "IsActive",
                title: "فعال بودن"
            },
            {
                name: "CultureLcid",
                title: "شناسه زبان"
            },
            {
                name: "PictureId",
                title: "شناسه تصویر"
            }
        ]
    },
    panelProducts: {
        list_route: "api/v1.0/cms/panelproduct/active",
        detail_route: "api/v1.0/cms/panelproduct/",
        list_fields: [
            {
                name: "name",
                title: "نام"
            },
            {
                name: "shortDescription",
                title: "توضیحات کوتاه"
            },
            {
                name: "advicePhoneNumber",
                title: "شماره تلفن مشاوره"
            }
        ],
        form_fields: [
            {
                name: "Name",
                title: "نام"
            },
            {
                name: "ShortDescription",
                title: "توضیحات کوتاه"
            },
            {
                name: "AdvicePhoneNumber",
                title: "شماره تماس مشاور"
            },
            {
                name: "Ordering",
                title: "ترتیب"
            },
            {
                name: "IsActive",
                title: "فعال بودن"
            },
            {
                name: "CultureLcid",
                title: "شناسه زبان"
            },
            {
                name: "CatalogFileId",
                title: "شناسه کاتالوگ",
                type: "image",
                get: {
                    field: "picture",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "SeoTitle",
                title: "عنوان سئو"
            },
            {
                name: "SeoDescription",
                title: "توضیحات سئو"
            }
        ]
    },
    panelProductAdvantages: {
        list_route: "api/v1.0/cms/panelproductadvantage/active",
        detail_route: "api/v1.0/cms/panelproductadvantage/",
        create_route: "api/v1.0/cms/panelproductadvantage",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "panelProductId",
                title: "شناسه محصول پنل"
            },
            {
                name: "ordering",
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن"
            }
        ]
    },
    panelProductAttributes: {
        list_route: "api/v1.0/cms/panelproductattribute/active",
        detail_route: "api/v1.0/cms/panelproductattribute/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "panelProductId",
                title: "شناسه محصول پنل"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "ordering",
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن"
            }
        ]
    },
    panelProductFaqs: {
        list_route: "api/v1.0/cms/panelproductfaq/active",
        detail_route: "api/v1.0/cms/panelproductfaq/",
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
                name: "panelProductId",
                title: "شناسه محصول پنل"
            },
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
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن"
            }
        ]
    },
    panelProductProjects: {
        list_route: "api/v1.0/cms/panelproductproject/active",
        detail_route: "api/v1.0/cms/panelproductproject/",
        list_fields: [
            {
                name: "PanelProductId",
                title: "شناسه محصول پنل"
            },
            {
                name: "Name",
                title: "نام"
            }
        ],
        form_fields: [
            {
                name: "PanelProductId",
                title: "شناسه محصول پنل"
            },
            {
                name: "Name",
                title: "نام"
            },
            {
                name: "PictureId",
                title: "شناسه تصویر"
            },
            {
                name: "Ordering",
                title: "ترتیب"
            },
            {
                name: "IsActive",
                title: "فعال بودن"
            }
        ]
    },
    sliderItems: {
        list_route: "api/v1.0/cms/sliderItem/active?pageIndex=0&pageSize=100",
        detail_route: "api/v1.0/cms/sliderItem/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
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
                type: "number"
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
                type: "number",
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
    users: {
        list_route: "api/v1.0/cms/user/active?pageIndex=0&pageSize=100",
        detail_route: "api/v1.0/cms/user/",
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
                name: "userName",
                title: "نام کاربری"
            }
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
                title: "نام کاربری"
            }
        ]
    },
}
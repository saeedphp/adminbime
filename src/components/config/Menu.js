export const Menu = [
/*    {
        name: "states",
        title: "استان ها",
        icon: 'fa fa-home',
    },
    {
        name: "cities",
        title: "شهرها",
        icon: 'fa fa-city',
    },
    {
        name: "addresses",
        title: "آدرس ها",
        icon: 'fa fa-address-book',
    },
    {
        name: "blogTypes",
        title: "نوع خبر و رویدادها",
        icon: 'fa fa-newspaper',
    },*/
    {
        title: "اخبار و بلاگ",
        icon: 'fa fa-list',
        children: [
            {
                name: "blogCategories",
                title: "دسته بندی ها",
                icon: 'fa fa-list',
            },
            {
                name: "BlogPosts",
                title: "مقالات",
                icon: 'fa fa-newspaper',
            }
        ]
    },

    /*{
        name: "faqs",
        title: "سوالات متداول"
    },*/
    {
        title: "شعب و مراکز درمانی",
        icon: 'fa fa-hospital',
        children: [
            {
                name: "cities",
                title: "شهرها",
                icon: 'fa fa-city',
            },
            {
                name: "HealthCenterPdfs",
                title: "pdf مراکز درمانی",
                icon: 'fa fa-file-pdf',
            },
            {
                name: "healthCenters",
                title: "مراکز درمانی",
                icon: 'fa fa-hospital',
            },
            {
                name: "Representationes",
                title: "شعب",
                icon: 'fa fa-code-branch',
            },
            {
                name: "DamageCenters",
                title: "شعب دریافت خسارت",
                icon: 'fa fa-code-branch',
            },
        ]
    },
    {
        title: "قوانین و مقررات",
        icon: 'fa fa-ruler',
        children: [
            {
                name: "pdfs",
                title: "بروشور",
                icon: 'fa fa-file-pdf',
            },
            {
                name: "Regulation",
                title: "شرایط عضویت",
                icon: 'fa fa-registered',
            },
            {
                name: "GeneralCondition",
                title: "شرایط عمومی",
                icon: 'fa fa-reply-all',
            },
        ]
    },

    {
        title: "شبکه فروش",
        icon: 'fa fa-ruler',
        children: [
            {
                name: "GeneralRule",
                title: "قوانین و مقررات",
                icon: 'fa fa-ruler',
            },
            {
                name: "RepresentationConditions",
                title: "قوانین اخذ نمایندگی",
                icon: 'fa fa-money-bill',
            },
        ]
    },

    {
        title: "محصولات",
        icon: 'fa fa-ruler',
        children: [
            {
                name: "insurances",
                title: "همه دسته محصولات",
                icon: 'fa fa-shield-alt',
            },
            {
                name: "insuranceInfos",
                title: "جزئیات محصولات",
                icon: 'fa fa-info',
            },
        ]
    },

    {
        title: "درباره ما",
        icon: 'fa fa-ruler',
        children: [
            {
                name: "jobPositions",
                title: "جایگاه های شغلی",
                icon: 'fa fa-chair',
            },
            {
                name: "users_bime",
                title: "مدیریت و اعضای هیئت مدیره بیمه آرمان",
                icon: 'fa fa-user',
            },
            {
                name: "visions",
                title: "چشم اندازها",
                icon: 'fa fa-eye',
            },
            {
                name: "visionAttributes",
                title: "ویژگی های چشم انداز",
                icon: 'fa fa-eye',
            },
        ]
    },

    {
        title: "گزارشگری",
        icon: 'fa fa-list-alt',
        children: [
            {
                name: "revelations",
                title: "گزارشگری",
                icon: 'fa fa-list-alt',
            },
            {
                name: "revelationAttributes",
                title: "ویژگی گزارشگری",
                icon: 'fa fa-list-alt',
            },
        ]
    },

    {
        title: "فرم های سایت",
        icon: 'fa fa-speaker-deck',
        children: [
            {
                name: "suggestions",
                title: "پیشنهادات",
                icon: 'fa fa-speaker-deck',
            },
            {
                name: "ContactUs",
                title: "فرم تماس",
                icon: 'fa fa-phone-alt',
            },
        ]
    },

    {
        title: "منو",
        icon: 'fa fa-hamburger',
        children: [
            {
                name: "menu",
                title: "مدیریت منو",
                icon: 'fa fa-hamburger',
            },
            {
                name: "FirstFooter",
                title: "مدیریت فوتر ستون اول",
                icon: 'fa fa-hamburger',
            },
            {
                name: "SecondFooter",
                title: "مدیریت فوتر ستون دوم",
                icon: 'fa fa-hamburger',
            },
            {
                name: "ThirdFooter",
                title: "مدیریت فوتر ستون سوم",
                icon: 'fa fa-hamburger',
            },
        ]
    },

    {
        title: "کاربران",
        icon: 'fa fa-user',
        children: [
            {
                name: "users",
                title: "ایجاد کاربران",
                icon: 'fa fa-user',
            },
            {
                name: "PersonalUsers",
                title: "کاربران پرسنل",
                icon: 'fa fa-user',
            },
            {
                name: "VendorsUsers",
                title: "کاربران نماینده",
                icon: 'fa fa-user',
            },
        ]
    },

    {
        title: "بنر",
        icon: 'fa fa-sliders-h',
        children: [
            {
                name: "sliderItems",
                title: "بنر",
                icon: 'fa fa-sliders-h',
            },
        ]
    },

    {
        title: "پنل کاربری",
        icon: 'fa fa-user',
        children: [
            {
                name: "PersonnelPanelCategory",
                title: "دسته بندی پنل پرسنل",
                icon: 'fa fa-user',
            },
            {
                name: "PersonnelPanel",
                title: "آیتم های دانلودی پنل پرسنل",
                icon: 'fa fa-user',
            },
            {
                name: "PersonalLinks",
                title: "لینک های مفید پرسنل",
                icon: 'fa fa-link',
            },
            {
                name: "RepresentativePanelCategory",
                title: "دسته بندی پنل نمایندگان",
                icon: 'fa fa-user',
            },
            {
                name: "RepresentativePanel",
                title: "آیتم های دانلودی نماینده",
                icon: 'fa fa-user',
            },
            {
                name: "VendorsLinks",
                title: "لینک های مفید نماینده",
                icon: 'fa fa-link',
            },
        ]
    },

    {
        title: "شبکه های اجتماعی",
        icon: 'fa fa-file-medical-alt',
        children: [
            {
                name: "SocialMedia",
                title: "شبکه های اجتماعی",
                icon: 'fa fa-file-medical-alt',
            },
        ]
    },

    {
        title: "تنظیمات سایت",
        icon: 'fa fa-cog',
        children: [
            {
                name: "setting",
                title: "تنظیمات سایت",
                icon: 'fa fa-cog',
            },
        ]
    },
]
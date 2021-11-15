const sideBarList = [
    {
        id: 0,
        title: "ყველა",
        subCategoty: [],
        className: "all"
    },
    {
        id: 2,
        title: "სლოტები",
        subCategoty: [
            {
                id: 3,
                name: "EGT",
                isChecked: true

            },
            {
                id: 11,
                name: "QUICKSPIN",
                isChecked: true
            },
            {
                id: 302,
                name: "NOLIMIT CITY",
                isChecked: true
            },
            {
                id: 525,
                name: "HACKSAW",
                isChecked: true
            }
        ],
        className: "slot"
    },
    {
        id: 12,
        title: "სპორტი",
        subCategoty: [
            {
                id: 13,
                name: "FREEBET",
                isChecked: true
            }

        ],
        className: "sport"
    },
    {
        id: 14,
        title: "სპინ თამაშები",
        subCategoty: [
            {
                id: 15,
                name: "სპინ პოკერი",
                isChecked: true
            },
            {
                id: 16,
                name: "სპინ ჯოკერი",
                isChecked: true
            },
            {
                id: 17,
                name: "სპინ დომინო",
                isChecked: true
            },
            {
                id: 18,
                name: "სპინ ბურა",
                isChecked: true
            }
        ],
        className: "spin"
    },
    {
        id: 19,
        title: "ვოლტი",
        subCategoty: [],
        className: "volt"
    },


]

export function getSideBarList() {
    return sideBarList;
}
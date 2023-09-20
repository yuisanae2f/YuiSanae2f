strArr = [
    {
        id: "title",
        ko: "변수",
        en: "Variable"
    },

    {
        id: "translate",
        ko: "언어",
        en: "Languages"
    },

    {
        id: "summary",
        ko: "변수",
        en: "Variable"
    },

    {
        id: "summary[0]",
        ko: "자료를 넣을 수 있도록 메모리에 명시적으로 공간을 <a href='#allocation'>할당</a>하도록 하여 그 공간에 이름을 붙인다.",
        en: "explicitly <a href='#allocation'>allocates</a> the space on the memory for the data and names it."
    },

    {
        id: "_te[0]",
        ko: "이것을 보고 있다면 당신이 클릭한 것은 임의의 변수 이름으로써 작용했다는 뜻이다.",
        en: "Seeing this represents that the one you've clicked was the temporary name of a variable."
    },

    {
        id: "allocation",
        ko: "할당",
        en: "Allocation"
    },

    {
        id: "allocation[0]",
        ko: "값을 실제로 <a href='./pointer.html'>메모리에</a> <a href='#allocation'>할당</a>하는 과정이다.",
        en: "is the actual process to allocate to <a href='./pointer.html'>memory</a>."
    },

    {
        id: "allocation[1]",
        ko: "보통의 경우 <a href='./pointer.html'>메모리에</a> <a href='#allocation'>할당</a>한 이후 연산을 진행하므로 <a href='#allocation.static'>정적 할당</a>을 사용하는 것이 일반적이다.",
        en: "Since the operation performs after the allocation in normal cases, <a href='#allocation.static'>static allocation</a> is the common option."
    },

    {
        id: "allocation.static",
        ko: "정적 <a href='#allocation'>할당</a>",
        en: "Static <a href='#allocation'>Allocation</a>"
    },

    {
        id: "allocation.static[0]",
        ko: "프로그램을 실행하기 전에 먼저 <a href='#allocation'>할당</a>한다.",
        en: "means <a href='#allocation'>allocating</a> before programme execution."
    },

    {
        id: "allocation.static[1]",
        ko: "각자 <a href='#lifeSpan'>수명</a>을 가지며 <a href='#lifeSpan'>수명</a>이 끝난 이후 자동으로 <a href='#disposal'>폐기된다</a>.",
        en: "will be automatically <a href='#disposal'>discarded</a> after their given <a href='#lifeSpan'>lifespan</a>."
    },

    {
        id: "allocation.dynamic",
        ko: "동적 <a href='#allocation'>할당</a>",
        en: "Dynamic <a href='#allocation'>Allocation</a>"
    },

    {
        id: "allocation.dynamic[0]",
        ko: "프로그램 실행 도중(런타임)에 <a href='#allocation'>할당</a>하는 것을 의미한다.",
        en: "means <a href='#allocation'>allocating</a> while on runtime."
    },

    {
        id: "allocation.dynamic[1]",
        ko: "이 경우 <a href='#disposal'>메모리의 해제</a>는 자동으로 이루어지지 않는다. (따라서 명시적으로 <a href='#disposal'>해제</a>할 필요가 있다.)",
        en: "will not <a href='#disposal'>dispose</a> the memory automatically. (which means that it must be <a href='#disposal'>disposed</a>)"
    },

    {
        id: "disposal",
        ko: "해제",
        en: "Memory Disposal"
    },

    {
        id: "disposal[0]",
        ko: "<a href='#allocation'>할당</a> 이후에는 무조건 메모리의 헤제가 필요하다.",
        en: "must be paired with the <a href='#allocation'>allocation</a>."
    },

    {
        id: "disposal[1]",
        ko: "<a href=\"#allocation.static\">정적 할당</a>일 경우 <a href=\"#lifeSpan\">정해진 수명</a> 이후 자동으로 수행된다.",
        en: "will be automatically operated once <a href=\"#lifeSpan\">the scope</a> has passed."
    },

    {
        id: "disposal[2]",
        ko: "<a href=\"#allocation.dynamic\">수명의 개념이 없는 동적 할당</a>일 경우 <a href=\"#lifeSpan\">정해진 수명</a>이 없으므로 직접 <a href='#disposal'>파괴</a>할 필요가 있다.",
        en: "<a href=\"#allocation.dynamic\">Provided the one has no scope</a>, it needs to be <a href='#disposal'>discarded</a> explicitly."
    },

    {
        id: "lifeSpan",
        ko: "수명",
        en: "Scope"
    },

    {
        id: "lifeSpan[0]",
        ko: "<a href='#allocation.static'>정적으로 할당된</a> 변수가 <a href='#allocation'>할당</a>되고부터 <a href='#disposal'>파괴</a>될 때까지를 변수의 수명이라 한다.",
        en: "is a span between <a href='#allocation'>the allocation</a> and <a href='#disposal'>disposal</a> of the variable which is <a href='#allocation.static'>statically allocated</a>."
    },

    {
        id: "lifeSpan[1]",
        ko: "변수가 <a href='#allocation.static'>정적으로 할당될</a> 시에 자동으로 가지게 된다.",
        en: "is given automatically once a variable is <a href='#allocation.static'>allocated statically</a>."
    }
];
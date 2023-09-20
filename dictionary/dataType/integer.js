const strArr = [
    {
        id: "translate",
        ko: "언어", en: "Languages"
    }, // Languages

    { id: "title", ko: "정수형", en: "Integer" },

    {
        id: "bool[0]",
        ko: '1bit의 크기를 가지고 있으며 이것은 <a href="#bool.false" class="generic">0</a> 혹은 <a href="#bool.true" class="generic">1</a>만을 저장할 수 있음을 의미한다.',
        en: `has a size of a single bit, which means that it could store only <a href="#bool.false" class="generic">0</a> or <a href="#bool.true" class="generic">1</a>.`
    },

    {
        id: "bool[1]",
        ko: `따라서 이 자료형은 <a href="#bool.true" class="mark">참</a> 혹은 <a href="#bool.false" class="mark">거짓</a>만을 저장할 수 있다.`,
        en: `could only store the value of <a href="#bool.true" class="reservedKey">true</a> or <a href="#bool.false" class="reservedKey">false</a>.`
    },

    {
        id: "bool.true[0]",
        ko: '참을 뜻하며 <a href="#bool.true" class="generic">1</a>의 값을 가진다.',
        en: `means <a href="#bool.true" class="reservedKey">true</a>, has the value of <a href="#bool.true" class="generic">1</a>.`
    }, // bool.true

    {
        id: "bool.true[1]",
        ko: '컴파일러는 <a href="#bool.false" class="generic">0</a> 이외에는 참으로 읽는 경향이 있다.',
        en: `Every value except for <a href="#bool.false" class="generic">0</a> tends to stand for <a href="#bool.true" class="reservedKey">true</a>.`
    },

    {
        id: "bool.false[0]",
        ko: '거짓을 뜻하며 <a href="#bool.false" class="generic">0</a>의 값을 가진다.',
        en: `means <a href="#bool.false" class="reservedKey">false</a>, has the value of <a href="#bool.false" class="generic">0</a>.`
    }, // bool.false

    {
        id: "char[0]",
        ko: '1byte의 크기를 지닌다.',
        en: "has a size of a single byte."
    }, // char

    {
        id: "char[1]",
        ko: 'ASCII 문자를 숫자로써 저장한다.',
        en: `can store the ASCII characters as numbers.`
    },

    {
        id: "char.A[0]",
        ko: '따옴표로 문자 하나를 감쌈으로써 정수가 된다.',
        en: 'is the method to store the <a class="reservedKey", href="#char">char</a> data.'
    }, // char.A

    {
        id: "int[0]",
        ko: '4byte의 크기를 지녔다.',
        en: 'has a size of four bytes.'
    }, // int

    {
        id: "int[1]",
        ko: "기본적인 정수의 특징을 지닌다.",
        en: "has a feature of normal integer."
    }
]
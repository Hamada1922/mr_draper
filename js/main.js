// main menu toggler
let toggler = document.querySelector(".toggler");
let menu = document.querySelector(".menu");

toggler.onclick = () => {
  menu.classList.toggle("active");
};

// questions toggler
let quests = document.querySelectorAll(".quest");
let answers = document.querySelectorAll(".answer");

quests.forEach((quest, index) => {
  quest.addEventListener("click", () => {
    answers[index].classList.toggle("active");
  });
});

// change language
const languages = document.getElementById("languages");
//
languages.onchange = () => {
  if (languages.value == "english") {
    location.reload();
  } else {
    document.body.style.direction = "rtl";
    document.body.style.fontFamily = "Amiri";
    // HEADER
    menu.children[0].textContent = "من نحن";
    menu.children[1].textContent = "بطاقات هدايا";
    menu.children[2].textContent = "المدونة";
    menu.children[3].textContent = "تواصل معنا";
    document
      .querySelectorAll(".main_btn")
      .forEach((btn) => (btn.textContent = "ابدأ الأن"));

    // ABOVE
    document.querySelector(".above h1").textContent =
      "ملابس مختارة يدويًا من مصممي الأزياء الخبراء";
    document.querySelector(".above p").textContent =
      "من ملابس العمل إلى عطلة نهاية الأسبوع وكل شيء بينهما ، اطلب خزانة ملابسك مع الملابس المعتمدة من المصمم والمختارة لك فقط.";
    // WORKS
    document.querySelector(".works .heading h2").textContent = "كيف تعمل";
    document.querySelector(".works .heading p").textContent =
      "لقد حصلنا على ظهرك.  توقف عن التشديد على ما ترتديه وابدأ في امتلاك أسلوبك.  سيقوم المصمم الخبير بتجميع الملابس في أي مناسبة بناءً على تفضيلاتك.  تخبرنا بما تحبه ونتأكد من أنك تبدو في أفضل حالاتك";

    let works_steps = document.querySelector(".works .steps");
    works_steps.children[0].children[1].textContent = "إنشاء ملف تعريف";
    works_steps.children[0].children[2].textContent = ".نسجل أحجامك وتفضيلاتك";

    works_steps.children[1].children[1].textContent = "تواصل مع المصمم";
    works_steps.children[1].children[2].textContent =
      ".حدد الاتجاهات التي تتناسب مع أسلوب حياتك";

    works_steps.children[2].children[1].textContent = "جرب الملابس";
    works_steps.children[2].children[2].textContent =
      "سيقوم المصمم الخاص بك بإرسال صندوق من الملابس مباشرة إلى باب منزلك";

    works_steps.children[3].children[1].textContent = "احتفظ بما تحب";
    works_steps.children[3].children[2].textContent =
      "ادفع ثمن الملابس التي تحتفظ بها ، ونجمع الباقي";

    // BRANDS
    document.querySelector(".brands-section .heading h2").textContent =
      "كل هذه العلامات التجارية تتطابق معًا";
    document.querySelector(".brands-section .heading p").textContent =
      "دع المصمم يخلق مظهرك واختر الملابس التي ستشكل أسلوبك.  سواء كنت بحاجة إلى خزانة ملابس جديدة تمامًا أو لترقية بعض السلع الأساسية ، ستحصل على المظهر العصري دون عناء داخل المتجر";
    // SHOPPING
    document.querySelector(".shopping .heading h2").textContent =
      "توقف عن التسوق إلى الأبد!";
    document.querySelector(".shopping .heading p").textContent =
      "دع المصمم يخلق مظهرك واختر الملابس التي ستشكل أسلوبك.  سواء كنت بحاجة إلى خزانة ملابس جديدة تمامًا أو لترقية بعض السلع الأساسية ، ستحصل على المظهر العصري دون عناء داخل المتجر";

    let shopping_cards = document.querySelector(".shopping .container");

    shopping_cards.children[0].children[1].children[0].textContent =
      "أسلوب شخصي";
    shopping_cards.children[0].children[1].children[1].textContent =
      "دع المصمم يخلق مظهرك واختر الملابس التي ستشكل أسلوبك.  سواء كنت بحاجة إلى خزانة ملابس جديدة تمامًا أو لترقية بعض السلع الأساسية ، ستحصل على المظهر العصري دون عناء داخل المتجر";

    shopping_cards.children[1].children[0].children[0].textContent =
      "إرشادات الخبراء";
    shopping_cards.children[1].children[0].children[1].textContent =
      "احصل على نصائح حول تجميع الملابس أو إقران عناصر جديدة بخزانة ملابسك الحالية";

    shopping_cards.children[2].children[1].children[0].textContent =
      "اكتشف مظاهر جديدة";
    shopping_cards.children[2].children[1].children[1].textContent =
      "اختر من بين مئات العناصر الشهيرة من أفضل العلامات التجارية اليوم وسيتولى المصمم الخاص بك التعامل مع الباقي";
    // CUSTOMERS
    document.querySelector(".customers-section h2").textContent =
      "أكثر من 39000 عميل سعيد يثقون بمصممهم بخزانة ملابسهم!";

    let customers = document.querySelector(".customers-section .customers");

    customers.children[0].querySelector("q").textContent =
      "أنتم يا رفاق تحصلون دائمًا على موقع أسلوبي وعندما لا تكونون قد أرسلتم الصندوق بالكامل مرة أخرى بدون رسوم كما تقولون";
    customers.children[0].querySelector("span").textContent = "لوك";

    customers.children[1].querySelector("q").textContent =
      "شكرًا لك ، أفضل تجربة تسوق على الإطلاق ، من رجل يكره الذهاب إلى المركز التجاري!";
    customers.children[1].querySelector("span").textContent = "نادر";

    customers.children[2].querySelector("q").textContent =
      "شكرًا!  أشعر كأنني مشهور الآن بعد أن أصبح لدي مصفف شعر ، ستشعر زوجتي بالغيرة هاها!";
    customers.children[2].querySelector("span").textContent = "تشارلز";
    //  SEEN
    document.querySelector(".seen h2").textContent = "كما شوهد على ";
    document.querySelector(".seen .customer q").textContent =
      "لقد جربت المصمم الشخصي للسيد دريبر لأول مرة وأتمنى لو اكتشفته منذ سنوات";
    document.querySelector(".seen .customer span").textContent =
      "ريتشارد فيتزجيرالد";
    // EXTRA
    let boxes = document.querySelector(".extra .boxes");
    boxes.children[0].children[0].textContent = "لا التزام";
    boxes.children[0].children[1].textContent =
      "ليس هناك التزام بالاحتفاظ بأي شيء.  اختر العناصر التي تريدها وأرسل الباقي.  احتفظ بها كلها ، أو احتفظ بها بدونها.  الأمر متروك لك!";

    boxes.children[1].children[0].textContent = "لا توجد رسوم أو اشتراكات خفية";
    boxes.children[1].children[1].textContent =
      "جرب الملابس في المنزل ، واشتر الأشياء المفضلة وأرسل الباقي.  تغطي رسوم التصميم البالغة 80 درهمًا وقت الخبير الخاص بك ونصائحه - ويتم إضافتها إلى أي شيء تحتفظ به.";

    document.querySelector(".extra .customer q").textContent =
      "أحب أن تحصل باولا على أسلوبي ولياقة لأنني صعب الإرضاء حقًا.  في الوقت الذي لم يعجبني أي شيء ، أعدت كل شيء بدون مقابل ، لذا كان ذلك رائعًا";
    document.querySelector(".extra .customer span").textContent = "الأردن";
    // QUESTIONS
    document.querySelector(".questions-section .eye h3").textContent =
      "المصمم الشخصي بعين الاعتبار لك!";
    document.querySelector(".questions-section .eye p").textContent =
      "مصمم الأزياء الخاص بك هو شخص حقيقي لديه عين حقيقية للموضة.  قم ببناء علاقة مستمرة مع مصمم الأزياء الخاص بك وتأكد من أن خزانة ملابسك على ما يرام!  تواصل مع مصمم الأزياء الخاص بك ، وخصص مظهرك ، واحصل على شريك يساعدك على تجاوز العقبات والاحتفال بالنجاحات!";

    let questions = document.querySelector(".questions-section .questions");

    questions.children[0].children[0].children[0].textContent =
      "كم عدد الحزم التي ترسل الي";
    questions.children[0].children[1].textContent =
      "فقط عندما تطلب واحدة.  لن نرسل لك واحدة إلا إذا طلبت ذلك.";

    questions.children[1].children[0].children[0].textContent =
      "كم نكلفة الخدمة";
    questions.children[1].children[1].textContent =
      "تغطي رسوم التصميم البالغة 80 درهمًا وقت الخبير الخاص بك ونصائحه - ويتم إضافتها إلى أي شيء تحتفظ به.  تسليم وإرجاع الطرد الخاص بك مجاني!";

    questions.children[2].children[0].children[0].textContent =
      "كم ثمن الملابس";
    questions.children[2].children[1].textContent =
      "مساوية أو أقل من أسعار المول - ليس أكثر من ذلك!";

    questions.children[3].children[0].children[0].textContent = "كيف ادفع";
    questions.children[3].children[1].textContent =
      "مع البطاقة التي تضيفها إلى ملف التعريف الخاص بك.";

    questions.children[4].children[0].children[0].textContent =
      "متي سيتم محاسبتي";
    questions.children[4].children[1].textContent =
      "يتم فرض رسوم تصميم بقيمة 80 درهمًا إماراتيًا لمرة واحدة على صندوقك الأول وسيتم تخصيصها لمشترياتك المستقبلية.  يتم محاسبتك فقط على أي شيء يزيد عن 80 درهمًا إماراتيًا بمجرد إرجاع الطرد إلينا وفقط إذا كنت قد احتفظت بمواد تزيد قيمتها عن 80 درهمًا إماراتيًا";

    // SIGNATURE
    document.querySelector(".sign").textContent =
      "امتلك أسلوب التوقيع الخاص بك اليوم!";
    // FOOTER
    document.querySelector("footer span").textContent = "تسوق أثناء التنقل:";
  }
};

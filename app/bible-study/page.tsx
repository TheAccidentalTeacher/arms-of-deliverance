import CoverPage from "@/components/workbook/CoverPage";
import WeekBanner from "@/components/workbook/WeekBanner";
import DayCard from "@/components/workbook/DayCard";
import MemoryVerse from "@/components/workbook/MemoryVerse";
import ShortAnswer from "@/components/workbook/ShortAnswer";
import JournalPrompt from "@/components/workbook/JournalPrompt";
import SectionRule from "@/components/workbook/SectionRule";
import QuizBlock from "@/components/workbook/QuizBlock";
import SidebarBox from "@/components/workbook/SidebarBox";
import PrintButton from "@/components/PrintButton";

export default function BibleStudyPage() {
  return (
    <div className="workbook-body">
      <PrintButton />
      <CoverPage
        series="Arms of Deliverance Learning Series"
        title="Six-Week Bible Study"
        subtitle="Faith, Identity and Providence in the Story of Katrine, Eddie and Mary"
        author="Tricia Goyer"
      />
      <SectionRule />

      {/* ============================================================ */}
      {/* WEEK 1: IDENTITY */}
      {/* ============================================================ */}
      <WeekBanner
        week={1}
        title="Identity: Known and Named by God"
        subtitle="Chapters 1-5 | Psalm 139:14 (KJV)"
        color="bible"
      />
      <MemoryVerse
        reference="Psalm 139:14"
        text="I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well."
        lines={5}
      />

      <DayCard day={1} week={1} title="The Hidden Girl">
        <p className="lesson-text">
          Chapter 1 opens in Nazi-occupied Brussels, 1944. We meet <strong>Katrine</strong> — but
          that is not her real name. She was born <em>Rebecca Lodz</em>, a young Jewish woman who
          has been living under a forged identity for over a year. Her lover, German SS officer
          <strong> Hendrick Schwartz</strong>, does not know the truth — and would kill her if he
          did. As you begin this study, consider what it means for God to know your true name and
          your whole self even when the world does not.
        </p>
        <ShortAnswer question="1. What is Katrine's real name, and why did she change it? (Ch. 1)" />
        <ShortAnswer question="2. The cafe Katrine entered had a sign reading NO JEWS ALLOWED. How does this one detail tell us everything about her daily danger?" />
        <ShortAnswer question="3. What does Psalm 139:1-4 say God knows about each person? List at least three things." />
        <ShortAnswer question="4. Katrine felt a deep sense of shame in Chapter 1. Do you think shame and guilt are the same thing? Use Scripture to support your answer." />
        <JournalPrompt prompt="Katrine had to hide who she was just to stay alive. Have you ever felt pressure to hide something true about yourself? How does it feel to know that God has always seen and known the real you — your real name, your real story?" />
      </DayCard>

      <DayCard day={2} week={1} title="Psalm 139 — Formed Before Birth">
        <p className="lesson-text">
          Read Psalm 139 in full today (KJV). King David marvels that God knows his thoughts, his
          words before he speaks them, and the days of his life before they began. For Rebecca
          Lodz — a Jewish woman in Nazi Europe — holding onto this truth that she was formed by
          God and precious to Him was an act of quiet defiance against a regime that said
          otherwise.
        </p>
        <ShortAnswer question="1. Read Psalm 139:13-16. List everything God did before you were born, according to these verses." />
        <ShortAnswer question="2. Verse 14 says we are 'fearfully and wonderfully made.' What do you think the word 'fearfully' means in this context?" lines={3} />
        <ShortAnswer question="3. The Nazi regime taught that some people were more valuable than others based on bloodline and race. How does Psalm 139 directly contradict this ideology?" />
        <ShortAnswer question="4. In verse 23-24, David invites God to search him. Why is that kind of honesty before God so rare — and so powerful?" />
        <JournalPrompt prompt="If God knows every word you will speak before it leaves your mouth (Ps. 139:4), how would that truth change the way you start your next conversation? Your next day?" />
      </DayCard>

      <DayCard day={3} week={1} title="Novel Connection — Two Identities, One Creator">
        <SidebarBox title="Historical Context">
          Belgium fell to Nazi occupation in May 1940. By 1944 Jewish Belgians who had not been
          deported lived under constant threat. The Nazis required identification papers at every
          checkpoint. Many Jews obtained forged documents; some, like Rebecca Lodz, built entirely
          new identities to survive.
        </SidebarBox>
        <ShortAnswer question="1. In Chapter 3, Hendrick works at the 'Office for Race and Settlement' — a Nazi bureau for racial classification. What does this tell us about how the Nazi government defined human identity?" />
        <ShortAnswer question="2. Chapter 5 introduces Mary, a female reporter competing in a man's newsroom. How is her struggle with identity (as a woman in a male field) different from Katrine's — and what do they share?" />
        <ShortAnswer question="3. Katrine kept her pregnancy secret. What do you think she feared most about being discovered — was it more about her identity as a Jew or as an unwed mother?" lines={3} />
        <JournalPrompt prompt="Both Katrine and Mary live in worlds that tried to define them by other people's rules. Describe one way your own culture today tries to define who you are. How does the truth of Psalm 139 speak back to that pressure?" />
      </DayCard>

      <DayCard day={4} week={1} title="Application — Your True Identity in Christ">
        <p className="lesson-text">
          As believers, our deepest identity is not our name, nationality, or circumstances — it is
          our standing before God as His beloved children. Rebecca Lodz could change her name and
          papers, but she could not hide from the God who knit her together before she was born.
        </p>
        <ShortAnswer question="1. Look up these KJV verses. Beside each, write what God calls you: John 1:12 / Galatians 3:26 / 1 Peter 2:9" lines={7} />
        <ShortAnswer question="2. How might knowing these truths have given Katrine strength to endure what lay ahead in the novel? How do they give you strength today?" />
        <ShortAnswer question="3. Without looking, write this week's memory verse (Psalm 139:14) below." lines={3} />
        <JournalPrompt prompt="Write a short prayer thanking God for knowing and naming you. You may use the language of Psalm 139 as your starting point." lines={8} />
      </DayCard>

      <DayCard day={5} week={1} title="Review and Memory Verse Check">
        <MemoryVerse
          reference="Psalm 139:14"
          text="I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well."
          lines={6}
        />
        <QuizBlock title="Week 1 Quiz — Identity">
          <ShortAnswer question="1. What is Katrine's true Jewish name? (Ch. 1)" lines={2} />
          <ShortAnswer question="2. In what country is this novel set, and in what year does Chapter 1 take place?" lines={2} />
          <ShortAnswer question="3. Who is Hendrick Schwartz, and what is the dangerous secret Katrine keeps from him?" lines={2} />
          <ShortAnswer question="4. Name two specific things Psalm 139 says God knows about you personally." lines={2} />
          <ShortAnswer question="5. In your own words, explain what 'fearfully and wonderfully made' means to you." lines={3} />
        </QuizBlock>
      </DayCard>

      <SectionRule />

      {/* ============================================================ */}
      {/* WEEK 2: COURAGE */}
      {/* ============================================================ */}
      <WeekBanner
        week={2}
        title="Courage: Be Strong and of Good Courage"
        subtitle="Chapters 6-11 | Joshua 1:9 (KJV)"
        color="bible"
      />
      <MemoryVerse
        reference="Joshua 1:9"
        text="Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."
        lines={5}
      />

      <DayCard day={1} week={2} title="Eddie — The Airman in Enemy Snow">
        <p className="lesson-text">
          Chapter 6 introduces <strong>Eddie</strong>, an American B-17 airman. The chapter opens
          with a vivid flashback: eight-year-old Eddie getting lost in snow-covered hills on a
          hunting trip with his father. He is alone, afraid, and cannot find familiar landmarks.
          This childhood memory of being lost — and eventually found — mirrors the much greater
          danger Eddie will face later in the novel when he is shot down over enemy territory. God
          promises in Joshua 1:9 not that the road will be easy, but that He will be present
          wherever we go.
        </p>
        <ShortAnswer question="1. Describe the childhood scene that opens Chapter 6. How does young Eddie's fear in the snow foreshadow his later situation in the war?" />
        <ShortAnswer question="2. God commanded Joshua to 'be strong and of a good courage' as Joshua prepared to lead Israel into Canaan. What was the source of Joshua's courage, according to verse 9?" lines={3} />
        <ShortAnswer question="3. Is courage the absence of fear, or is it something else? Use the text of Joshua 1:9 to explain your answer." />
        <ShortAnswer question="4. Chapter 7 shows Lee O'Donnelly boarding a troopship with trembling hands, heading to the European war. How does she display courage even while afraid?" />
        <JournalPrompt prompt="Think of a time when you had to do something frightening. Did knowing God was with you change how you approached it? How does Joshua 1:9 speak to that memory?" />
      </DayCard>

      <DayCard day={2} week={2} title="The B-17 Destiny's Child">
        <SidebarBox title="Historical Fact">
          Destiny's Child was a real B-17 Flying Fortress bomber assigned to the 91st Bomb Group,
          based in England. The name was chosen from slips of paper tossed into a hat. The aircraft
          was on its 53rd mission — a raid on Leipzig, Germany — when it was shot down by Luftwaffe
          fighters on July 20, 1944. Its crew chief, Jack Gaffney, had painted the famous
          illustration on the nose.
        </SidebarBox>
        <ShortAnswer question="1. What does the name 'Destiny's Child' suggest about how the crew viewed their fate? Does this perspective agree or conflict with a biblical view of providence?" />
        <ShortAnswer question="2. Chapter 9 describes the crew's routines before a mission. Eddie's crewmate Adam tries to pull a pillow over his head to avoid facing the day (Ch. 17). How does this small detail reveal human weakness even in brave men?" />
        <ShortAnswer question="3. The bomber is on its 53rd mission when it is shot down. What does this tell you about what the crew had already survived? How might that history test their courage?" lines={3} />
        <JournalPrompt prompt="Courage built over time looks different from sudden courage in a crisis. Write about a small, repeated act of courage in your own life — something that takes bravery every single day." />
      </DayCard>

      <DayCard day={3} week={2} title="Novel Connection — Mary on the Front Lines">
        <p className="lesson-text">
          By Chapter 7, war correspondent <strong>Lee O'Donnelly</strong> is desperate to get to
          the action. In Chapter 12, we meet another dimension of this world: Mary interviews the
          Crew Chief of a B-17 on the airfield. For women in WWII, simply being present in a war
          zone required daily courage — the military, the culture, and often the men themselves
          pushed back. Yet these women pressed on.
        </p>
        <ShortAnswer question="1. Why did Lee say she would 'die of boredom' writing about English politicians (Ch. 10)? What does her desire for the front lines tell us about her character?" />
        <ShortAnswer question="2. In Chapter 12, Mary approaches the mechanics' area alone. What does it take for her to go up and start a conversation with a stranger in that unfamiliar environment?" />
        <ShortAnswer question="3. God told Joshua 'be not afraid, neither be thou dismayed.' The word 'dismayed' means to be broken in spirit. Can courage coexist with discouragement? Explain with an example from the novel." />
        <JournalPrompt prompt="The women in this novel face both physical danger and cultural resistance. What form does courage take in your own daily life — not on a battlefield, but in ordinary moments?" />
      </DayCard>

      <DayCard day={4} week={2} title="Application — Obedient Courage">
        <p className="lesson-text">
          Joshua 1:9 frames courage as a <em>command</em> — 'Have not I commanded thee?' God is
          not simply suggesting that Joshua be brave; He is instructing it. This is courage rooted
          not in personality, natural ability, or a lack of fear — but in obedience to a God who
          promises His presence.
        </p>
        <ShortAnswer question="1. Look up these verses on courage and strength (KJV): Deuteronomy 31:6 / Isaiah 41:10 / Philippians 4:13. Write one truth from each verse." lines={6} />
        <ShortAnswer question="2. How is 'obedient courage' different from reckless bravery? Give an example from Eddie or Mary's story." />
        <ShortAnswer question="3. Write Joshua 1:9 from memory below." lines={3} />
        <JournalPrompt prompt="Is there something God has called you to do that requires courage you feel you do not have? Write it out as a prayer, using the words 'Have not I commanded thee?' as your starting point." lines={8} />
      </DayCard>

      <DayCard day={5} week={2} title="Review and Memory Verse Check">
        <MemoryVerse
          reference="Joshua 1:9"
          text="Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."
          lines={6}
        />
        <QuizBlock title="Week 2 Quiz — Courage">
          <ShortAnswer question="1. Describe the childhood flashback in Chapter 6. What was Eddie doing, and what happened to him?" lines={2} />
          <ShortAnswer question="2. What was the real name of the B-17 bomber in this novel, and on which mission number was it shot down?" lines={2} />
          <ShortAnswer question="3. Name the two female war correspondents introduced in Chapters 7-12." lines={2} />
          <ShortAnswer question="4. According to Joshua 1:9, what is the basis for the command to be courageous?" lines={2} />
          <ShortAnswer question="5. How does Joshua 1:9 define courage differently from how the world typically defines it?" lines={3} />
        </QuizBlock>
      </DayCard>

      <SectionRule />
      {/* ============================================================ */}
      {/* WEEK 3: SOVEREIGNTY OVER EVIL */}
      {/* ============================================================ */}
      <WeekBanner
        week={3}
        title="Sovereignty: God Meant It for Good"
        subtitle="Chapters 12-18 | Genesis 50:20 (KJV)"
        color="bible"
      />
      <MemoryVerse
        reference="Genesis 50:20"
        text="But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."
        lines={5}
      />

      <DayCard day={1} week={3} title="The Lebensborn Program — Evil by Design">
        <p className="lesson-text">
          In Chapters 10-15, Katrine is sent to a <strong>Lebensborn</strong> facility at
          Wegimont bei Luettich — a Nazi institution designed to breed racially 'pure' children
          for the Reich. She is surrounded by other girls whose babies will be taken and raised
          by the state. One young mother, <strong>Anneliese</strong>, is caught digging in the
          garden at night and disappears forever (Ch. 15). These chapters are among the darkest
          in the novel — a reminder that evil is real and organized. Yet the story of Joseph in
          Genesis 50 teaches that God's sovereignty operates even through the most calculated
          human evil.
        </p>
        <ShortAnswer question="1. What is the purpose of the Lebensborn facility Katrine is sent to? What does it reveal about how the Nazi regime viewed the value of human life?" />
        <ShortAnswer question="2. What happened to Anneliese after she was caught digging in the garden? (Ch. 15) What do you think she was trying to do?" />
        <ShortAnswer question="3. Read the story of Joseph in Genesis 37-50 (summary). Joseph's brothers sold him into slavery. How did God turn that evil act into something that saved thousands of lives?" />
        <JournalPrompt prompt="Can you think of a time — in history or in your own life — when something meant for harm ended up becoming something that helped others? How does Genesis 50:20 speak to that story?" />
      </DayCard>

      <DayCard day={2} week={3} title="The Child of Two Bloods">
        <p className="lesson-text">
          By Chapter 27, Eddie is holding <strong>baby Samuel</strong> — born to Katrine (Rebecca
          Lodz, a Jewish woman) and Hendrick Schwartz (an SS officer). The novel describes the
          baby as 'the child of a Nazi and a Jew — two people of chosen blood — one chosen by God,
          and the other by madness.' Eddie marvels at how God had chosen him as the protector of
          this woman and this child. Samuel's very existence is a living picture of Genesis 50:20.
        </p>
        <ShortAnswer question="1. How does Chapter 27 describe baby Samuel? What does this description reveal about how Eddie was beginning to understand God's purposes?" />
        <ShortAnswer question="2. Hendrick intended his relationship with Katrine to serve his own desires. How does the birth of Samuel represent something entirely outside of Hendrick's plans and intentions?" />
        <ShortAnswer question="3. What does it mean that God 'meant it for good'? Does that mean evil is actually good, or something else? Explain carefully." lines={3} />
        <JournalPrompt prompt="Baby Samuel is born into extraordinary darkness — but his life becomes a symbol of hope and redemption in the novel. Write about how you see the hand of a sovereign God in Samuel's story." />
      </DayCard>

      <DayCard day={3} week={3} title="Novel Connection — Katrine's Choice">
        <SidebarBox title="Historical Context">
          Lebensborn ('Fount of Life') was a Nazi SS program founded in 1935. It established homes
          across occupied Europe where women carrying children of SS officers could give birth.
          Babies deemed racially acceptable were registered as German citizens. Those considered
          impure by Nazi standards were often abandoned or killed. Estimates suggest 20,000 or
          more children were born in Lebensborn homes.
        </SidebarBox>
        <ShortAnswer question="1. Katrine is Jewish and secretly carrying the child of an SS officer — two facts that could get her killed in different ways. What does it tell us about her character that she protects the life of her child despite this danger?" />
        <ShortAnswer question="2. In what ways is Katrine's situation similar to the story of Esther in the Old Testament? What does she risk, and what does she protect?" />
        <ShortAnswer question="3. How does knowing that God is sovereign over evil give us peace — not passivity? What is the difference between trusting God and simply doing nothing?" />
        <JournalPrompt prompt="Katrine could not see how her suffering would end. She had to trust one day at a time. Write about a situation in your own life — past or present — where you had to trust God without being able to see the end of the story." />
      </DayCard>

      <DayCard day={4} week={3} title="Application — When Evil Has a Plan">
        <p className="lesson-text">
          Genesis 50:20 is one of the most powerful summaries of God's sovereignty in all of
          Scripture. The evil was real. The pain was real. The brothers' betrayal of Joseph was
          genuine wickedness. Yet God was actively working through it. This does not minimize the
          evil — it proclaims the greatness of God above it.
        </p>
        <ShortAnswer question="1. Look up Romans 8:28 (KJV). How does it relate to Genesis 50:20? Are they saying the same thing in different ways?" />
        <ShortAnswer question="2. Does believing in God's sovereignty change how we respond to injustice? Should we still fight against evil, or simply trust God? Use Scripture." />
        <ShortAnswer question="3. Write Genesis 50:20 from memory." lines={3} />
        <JournalPrompt prompt="Write a prayer for someone you know who is in a painful situation right now. Ask God to fulfill Genesis 50:20 in their life — that what was meant for harm would become something good." lines={8} />
      </DayCard>

      <DayCard day={5} week={3} title="Review and Memory Verse Check">
        <MemoryVerse
          reference="Genesis 50:20"
          text="But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."
          lines={6}
        />
        <QuizBlock title="Week 3 Quiz — Sovereignty">
          <ShortAnswer question="1. What was the Lebensborn facility, and why was Katrine sent there?" lines={2} />
          <ShortAnswer question="2. What happened to the girl named Anneliese in Chapter 15?" lines={2} />
          <ShortAnswer question="3. How does Chapter 27 describe baby Samuel? What are his parents' backgrounds?" lines={2} />
          <ShortAnswer question="4. In Genesis 50:20, who is speaking, and to whom? What evil had been done to this person?" lines={2} />
          <ShortAnswer question="5. How does God's sovereignty over evil give us peace without making evil acceptable?" lines={3} />
        </QuizBlock>
      </DayCard>

      <SectionRule />

      {/* ============================================================ */}
      {/* WEEK 4: SACRIFICE */}
      {/* ============================================================ */}
      <WeekBanner
        week={4}
        title="Sacrifice: Greater Love Hath No Man"
        subtitle="Chapters 19-23 | John 15:13 (KJV)"
        color="bible"
      />
      <MemoryVerse
        reference="John 15:13"
        text="Greater love hath no man than this, that a man lay down his life for his friends."
        lines={5}
      />

      <DayCard day={1} week={4} title="Mary on the B-17">
        <p className="lesson-text">
          Chapter 19 marks a pivotal moment: war correspondent <strong>Mary</strong> is given
          permission to fly on a mission aboard the B-17 <em>Destiny's Child</em>. Eddie is
          uneasy — he has enough to worry about keeping his crew alive without being responsible
          for a woman reporter. But Mary accepted the assignment knowing the danger. When the plane
          is shot down over enemy territory (Ch. 20), Eddie's parachute and Mary's land near each
          other. From that moment, Eddie's first thought is Mary's safety.
        </p>
        <ShortAnswer question="1. Why was Eddie troubled by having Mary on board his B-17? Does his concern suggest weakness or responsibility? (Ch. 19)" />
        <ShortAnswer question="2. After the plane is shot down, Eddie thinks 'getting this woman to safety would take his complete concentration.' (Ch. 20) Why does he take this on? What does it cost him?" />
        <ShortAnswer question="3. John 15:13 says the greatest love is to 'lay down' one's life for friends. Does this only mean a physical death, or can it include other kinds of sacrifice? Explain." />
        <JournalPrompt prompt="Think about someone who once made a sacrifice for you — large or small. What did their sacrifice cost them? How did it change you?" />
      </DayCard>

      <DayCard day={2} week={4} title="The Helpers — Sacrifice Without Headlines">
        <SidebarBox title="Historical Context">
          The Comet Line (Reseau Comet) was a Belgian-led escape network that helped hundreds of
          Allied airmen evade capture during WWII. Ordinary civilians — farmers, priests, young
          women, elderly couples — hid airmen in barns, fed them, forged their papers, and guided
          them south through France to Spain. If caught, they faced execution or the concentration
          camps. Most received no medals and no recognition.
        </SidebarBox>
        <ShortAnswer question="1. In Chapters 21-22, Eddie and Mary are sheltered by Belgian civilians who take enormous personal risks. What motivates people to sacrifice everything for strangers?" />
        <ShortAnswer question="2. Chapter 22 features a fierce elderly woman who yanks Eddie out of bed in the dark and hides him. She receives no payment. What kind of love does this represent?" />
        <ShortAnswer question="3. How does the sacrifice of anonymous helpers reflect John 15:13 — even when those helpers may not have known that Bible verse?" />
        <JournalPrompt prompt="The Belgian helpers in this novel risked death for people they had never met. Write about what it would take for you to make a sacrifice that no one might ever know about — and whether that changes the value of the sacrifice." />
      </DayCard>

      <DayCard day={3} week={3} title="Novel Connection — Mary Pretends to Be a Sister">
        <p className="lesson-text">
          In Chapter 26, Mary and Eddie are stopped by German soldiers on the road. Mary speaks
          fluent German and quickly invents a cover story: she tells the soldiers that Eddie is
          her deaf and dumb brother and that she is taking him to her sister's house. She holds
          a baby — Samuel — on her lap. One wrong word, one moment of hesitation, and they
          would both be shot. Her quick thinking sacrifices her own safety to protect Eddie and
          the child.
        </p>
        <ShortAnswer question="1. What specific lie did Mary tell the German soldiers in Chapter 26? Why was this moment so dangerous?" />
        <ShortAnswer question="2. Eddie had to stay completely silent and trust Mary's quick thinking. What does trusting another person's sacrifice require in us?" />
        <ShortAnswer question="3. Jesus laid down His life for us while we were still sinners (Romans 5:8). How is this different from laying down your life for a friend? What does it tell us about the nature of God's love?" />
        <JournalPrompt prompt="Mary's sacrifice in Chapter 26 required complete presence of mind under terror. When have you had to stay calm and think clearly to help or protect someone else? What gave you the ability to do that?" />
      </DayCard>

      <DayCard day={4} week={4} title="Application — Living Sacrifice">
        <p className="lesson-text">
          Romans 12:1 (KJV) calls believers to present their bodies as 'a living sacrifice, holy,
          acceptable unto God.' Most of us will never face a choice between our life and a friend's.
          But John 15:13 points to a pattern of love — daily, ordinary, costly love — that looks
          like Jesus.
        </p>
        <ShortAnswer question="1. What does Romans 12:1 mean by 'living sacrifice'? How is this both harder and easier than a one-time sacrifice?" />
        <ShortAnswer question="2. Name one practical way you could lay down your convenience, time, or comfort for someone else this week." lines={3} />
        <ShortAnswer question="3. Write John 15:13 from memory." lines={3} />
        <JournalPrompt prompt="Write a prayer asking God to grow in you the kind of love that gives without counting the cost — the kind of love that Eddie showed Mary, that the Belgian helpers showed strangers, and that Jesus showed all of us." lines={8} />
      </DayCard>

      <DayCard day={5} week={4} title="Review and Memory Verse Check">
        <MemoryVerse
          reference="John 15:13"
          text="Greater love hath no man than this, that a man lay down his life for his friends."
          lines={6}
        />
        <QuizBlock title="Week 4 Quiz — Sacrifice">
          <ShortAnswer question="1. What was Mary's role, and why was she on Eddie's B-17? (Ch. 19)" lines={2} />
          <ShortAnswer question="2. Describe what happened when Mary and Eddie were stopped by German soldiers on the road. (Ch. 26)" lines={2} />
          <ShortAnswer question="3. What was the Comet Line, and what risk did its members take?" lines={2} />
          <ShortAnswer question="4. According to John 15:13, what is the greatest expression of love?" lines={2} />
          <ShortAnswer question="5. How is Christ's sacrifice for sinners (Romans 5:8) greater than any human sacrifice?" lines={3} />
        </QuizBlock>
      </DayCard>

      <SectionRule />
      {/* ============================================================ */}
      {/* WEEK 5: REDEMPTION */}
      {/* ============================================================ */}
      <WeekBanner
        week={5}
        title="Redemption: Saved by Grace"
        subtitle="Chapters 24-27 | Ephesians 2:8-9 (KJV)"
        color="bible"
      />
      <MemoryVerse
        reference="Ephesians 2:8-9"
        text="For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."
        lines={5}
      />

      <DayCard day={1} week={5} title="Mary's Conversion">
        <p className="lesson-text">
          Chapter 23 is the spiritual turning point of the novel. Mary is alone in a hidden room
          at the castle, watching over the unconscious and feverish Eddie. She picks up his pocket
          New Testament and opens it to Luke 1:78-79: "Through the tender mercy of our God;
          whereby the dayspring from on high hath visited us, to give light to them that sit in
          darkness..." Then she reads John 14:6: "I am the way, the truth, and the life."
          She prays her first real prayer of faith — not in panic, but in longing. She sees what
          Eddie has that she does not: not talent, not courage, but a relationship with Jesus Christ.
          She asks for what he has.
        </p>
        <ShortAnswer question="1. What Bible verses did Mary read just before praying her conversion prayer? (Ch. 23) Why might those two passages have been especially compelling to her?" />
        <ShortAnswer question="2. Mary said she wanted what Eddie had. What exactly had she seen in Eddie throughout the novel that pointed her to Christ?" />
        <ShortAnswer question="3. Ephesians 2:8-9 teaches that salvation is 'not of yourselves' and 'not of works.' Mary spent her whole career proving herself through her own effort. How does this truth confront the way she had been living?" />
        <JournalPrompt prompt="Have you ever seen someone else's faith and found yourself drawn to what they had? Write about who that person was, what you saw in them, and how their faith pointed you toward God." />
      </DayCard>

      <DayCard day={2} week={5} title="Grace Is a Gift — Not Earned">
        <SidebarBox title="Key Verse Connection">
          Luke 1:78-79 (KJV): "Through the tender mercy of our God; whereby the dayspring from
          on high hath visited us, to give light to them that sit in darkness and in the shadow
          of death, to guide our feet into the way of peace." This was the verse Eddie's Bible
          fell open to when Mary picked it up. The "dayspring" is Christ — the sunrise that breaks
          into darkness.
        </SidebarBox>
        <ShortAnswer question="1. What does the word 'grace' mean? Write a definition in your own words, then look up Ephesians 2:8-9 and refine your definition." lines={3} />
        <ShortAnswer question="2. Why does Paul add 'lest any man should boast' at the end of verse 9? What is the danger of thinking salvation is something we earn?" />
        <ShortAnswer question="3. Mary had won awards, crossed oceans, and risked her life to earn respect. How does the concept of free grace — something you cannot earn — challenge someone with her personality?" />
        <JournalPrompt prompt="Write about a time when you tried to earn something that should have been freely given. How is receiving grace — unearned, undeserved — different from everything else in life?" />
      </DayCard>

      <DayCard day={3} week={5} title="Novel Connection — Rebecca's Letter">
        <p className="lesson-text">
          One of the novel's most moving moments comes in Chapter 29, when Mary reads the letter
          that Rebecca (Katrine) dictated to Sister Clarence. Rebecca had suffered a stroke and
          was nearly paralyzed — she could not keep or raise her son. But she released Samuel
          into Eddie and Mary's care with complete trust in God. Her letter is saturated with
          faith: "I prayed for arms of deliverance for my son... My loving God spared me... with
          all the love a mother's heart can hold, Rebecca." Her redemption is not freedom from
          suffering — it is freedom within it.
        </p>
        <ShortAnswer question="1. What physical condition was Rebecca in when she dictated her letter? (Ch. 29) What does it reveal about her character that her letter is full of gratitude anyway?" />
        <ShortAnswer question="2. Rebecca names her son Samuel after her father. Who was the original Samuel in the Old Testament, and how does the story of Hannah (1 Samuel 1) parallel Rebecca's experience?" />
        <ShortAnswer question="3. Rebecca was saved from death, but she was not healed. How can someone say 'my loving God spared me' while still suffering? Is this denial, maturity, or something else?" />
        <JournalPrompt prompt="Write a letter of release — not to a person, but to God. Name one thing you have been holding on to that you need to give to Him the way Rebecca gave Samuel to God." lines={9} />
      </DayCard>

      <DayCard day={4} week={5} title="Application — Received, Not Achieved">
        <p className="lesson-text">
          Every character in this novel spends years striving to achieve or prove something: Mary
          wants her father's acknowledgment. Lee wants respect. Eddie wants to bring his crew
          home. Katrine wants to survive. The gospel invites every one of them — and us — to stop
          striving for what the Father has already given freely through Christ.
        </p>
        <ShortAnswer question="1. Look up Titus 3:5 (KJV). How does it echo Ephesians 2:8-9? In what two ways does God NOT save us, according to this verse?" />
        <ShortAnswer question="2. How does Donald Miller finally acknowledging Mary (Ch. 28-29) serve as a picture — however imperfect — of a father offering grace to a child who didn't have to earn it?" />
        <ShortAnswer question="3. Write Ephesians 2:8-9 from memory." lines={4} />
        <JournalPrompt prompt="What is one area of your life where you are still trying to earn God's love or approval? Write a prayer surrendering that area and choosing to receive grace instead." lines={8} />
      </DayCard>

      <DayCard day={5} week={5} title="Review and Memory Verse Check">
        <MemoryVerse
          reference="Ephesians 2:8-9"
          text="For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."
          lines={6}
        />
        <QuizBlock title="Week 5 Quiz — Redemption">
          <ShortAnswer question="1. What Bible verse did Mary read in Chapter 23 just before her conversion prayer? What did she say she wanted?" lines={2} />
          <ShortAnswer question="2. What condition was Rebecca in when she sent her letter in Chapter 29?" lines={2} />
          <ShortAnswer question="3. Who was Hannah in the Old Testament, and why does Rebecca identify with her story? (Ch. 30)" lines={2} />
          <ShortAnswer question="4. According to Ephesians 2:8, what are the two instruments through which salvation comes?" lines={2} />
          <ShortAnswer question="5. Why does Ephesians 2:9 say salvation cannot come through works?" lines={3} />
        </QuizBlock>
      </DayCard>

      <SectionRule />

      {/* ============================================================ */}
      {/* WEEK 6: PROVIDENCE */}
      {/* ============================================================ */}
      <WeekBanner
        week={6}
        title="Providence: All Things Work Together"
        subtitle="Chapters 28-30 + Historical Note | Romans 8:28 (KJV)"
        color="bible"
      />
      <MemoryVerse
        reference="Romans 8:28"
        text="And we know that all things work together for good to them that love God, to them who are the called according to his purpose."
        lines={5}
      />

      <DayCard day={1} week={6} title="The Scarf That Was Not Hers">
        <p className="lesson-text">
          In Chapter 29, Mary discovers a fascinating detail: she had believed the orange-and-yellow
          scarf she saw on Magda (the resistance leader) was the same scarf Lee had given to a
          starving French family on the road weeks earlier. That coincidence was what led Mary and
          Eddie to seek shelter at the Wegimont castle — and thus to find baby Samuel. But the
          scarves were not the same at all. Mary had simply been mistaken. Eddie's response when
          she tells him: <em>"God works in mysterious ways."</em> A wrong identification — a
          mistake — became the thread that wove an entire rescue together.
        </p>
        <ShortAnswer question="1. What was the 'coincidence' about the scarf, and why did it lead Mary and Eddie to Wegimont? (Ch. 29)" />
        <ShortAnswer question="2. If Mary had been right that it was Lee's scarf, would it still have been providence? Does providence require a miracle, or can it work through ordinary — even incorrect — perceptions?" />
        <ShortAnswer question="3. Romans 8:28 says God works all things together. Does 'all things' include mistakes? Explain your answer using both Scripture and the novel." />
        <JournalPrompt prompt="Think of a time in your own life when something felt like a coincidence that turned out to be exactly what you needed. Looking back, how do you see God's hand in it? Does it change how you see 'accidents' in the future?" />
      </DayCard>

      <DayCard day={2} week={6} title="The Name in the Hat">
        <SidebarBox title="Historical Note — Destiny's Child">
          Tricia Goyer researched the real B-17 named Destiny's Child, one of hundreds of bombers
          with names chosen by their crews. The name for this one was drawn from slips of paper in
          a hat. The aircraft flew 53 missions before being shot down on July 20, 1944. Goyer
          writes in the Historical Note that when she learned the bomber's name, she felt it tied
          perfectly to the story God had placed on her heart — a story about the destiny of a child.
        </SidebarBox>
        <ShortAnswer question="1. How was the name 'Destiny's Child' chosen for the real bomber? Why is that method significant when we consider the theme of providence?" />
        <ShortAnswer question="2. The novel's author says the real bomber's name 'tied in perfectly' with her story. How might this be a real-world example of Romans 8:28?" />
        <ShortAnswer question="3. What does the word 'providence' mean? Write a definition. How is it the same as and different from 'fate' or 'luck'?" />
        <JournalPrompt prompt="The author discovered the bomber's name while doing research and felt it was God's confirmation of the story she was meant to tell. Have you ever experienced a moment where something felt like a confirmation from God? Write about it." />
      </DayCard>

      <DayCard day={3} week={6} title="Novel Connection — Rebecca and Hannah">
        <p className="lesson-text">
          The final chapter ends in post-war Belgium. Rebecca is partially paralyzed but alive,
          teaching children in a church. She receives a photograph of Samuel on a pony in Montana.
          Sister Clarence hands her the letter. Before reading it, Rebecca says she will tell the
          children the story of <strong>Hannah</strong> today. Hannah (1 Samuel 1-2) prayed for a
          child for years, and when God gave him to her, she gave him back to God. Rebecca, having
          lost everything — her name, her family, her health, her child — ends the novel saying:
          "My body is broken, but my heart is well, Sister."
        </p>
        <ShortAnswer question="1. Why does Rebecca choose Hannah's story to tell the children in Chapter 30? What does she have in common with Hannah?" />
        <ShortAnswer question="2. Sister Clarence tells Rebecca: 'Your Samuel is not the only child of destiny. You are too.' What does she mean? Why does this matter?" />
        <ShortAnswer question="3. Rebecca says her body is broken but her heart is well. How is this possible? What does it tell us about the relationship between physical circumstances and spiritual well-being?" />
        <JournalPrompt prompt="Write a brief modern version of Hannah's prayer (1 Sam. 2:1-10, KJV). Use your own life situation — something you have waited for, prayed for, or surrendered to God. Let Hannah's words guide your own." lines={9} />
      </DayCard>

      <DayCard day={4} week={6} title="Application — Called According to His Purpose">
        <p className="lesson-text">
          Romans 8:28 is not a promise that everything will feel good. It is a promise that God
          is actively working — providentially, sovereignly — in all circumstances toward a good
          end for those who love Him. By the end of <em>Arms of Deliverance</em>, every major
          character has been shaped by events entirely beyond their control: a crashed bomber,
          a false identity, an illegitimate child, a world at war. Yet each one finds that God
          was working through it all.
        </p>
        <ShortAnswer question="1. Look up Jeremiah 29:11 (KJV). How does it complement Romans 8:28? What two things does God have for His people, according to this verse?" />
        <ShortAnswer question="2. The novel ends with Lee at Buchenwald — among the most horrifying places of evil in human history. She cannot take notes. She simply extends her hands to the survivors. How is her presence there consistent with Romans 8:28?" />
        <ShortAnswer question="3. Write Romans 8:28 from memory." lines={4} />
        <JournalPrompt prompt="Looking back over six weeks of this study — and over the six weeks of this story — write about one truth about God that this novel and these Scriptures have confirmed, challenged, or grown in you. Be specific." lines={10} />
      </DayCard>

      <DayCard day={5} week={6} title="Final Review and Memory Verse Check">
        <MemoryVerse
          reference="Romans 8:28"
          text="And we know that all things work together for good to them that love God, to them who are the called according to his purpose."
          lines={6}
        />
        <QuizBlock title="Final Quiz — Providence and Review">
          <ShortAnswer question="1. What 'coincidence' about a scarf led Mary and Eddie to the castle where Samuel was hidden? Was it really a coincidence? (Ch. 29)" lines={2} />
          <ShortAnswer question="2. How was the name 'Destiny's Child' chosen for the real bomber? Where did the author describe this?" lines={2} />
          <ShortAnswer question="3. What is Rebecca doing at the end of the novel (Ch. 30)? What is her spiritual condition?" lines={2} />
          <ShortAnswer question="4. To whom does Romans 8:28 apply? Does it apply to everyone, or only to a specific group?" lines={2} />
          <ShortAnswer question="5. Which of the six weeks' themes — Identity, Courage, Sovereignty, Sacrifice, Redemption, or Providence — do you find most meaningful personally, and why?" lines={5} />
        </QuizBlock>

        <p style={{ marginTop: "2.5rem", fontStyle: "italic", color: "var(--accent)", fontWeight: 600, borderTop: "2px solid var(--gold)", paddingTop: "1.5rem" }}>
          Capstone Project Options — choose one:
        </p>
        <ShortAnswer
          question="OPTION A — Essay: Compare Rebecca Lodz (Katrine) to the Old Testament figure of Esther. Both women hid their true identity to survive. Both eventually revealed who they were at great personal risk. Write a 4-6 paragraph essay exploring the parallel, using specific scenes from Arms of Deliverance and specific Bible passages."
          lines={14}
        />
        <ShortAnswer
          question="OPTION B — Creative Writing: Imagine you are Sister Clarence. You have just watched Hendrick Schwartz die on the road outside Wegimont. Write a journal entry from that evening — what you saw, what you did, what you prayed, and what you believed about God's justice."
          lines={14}
        />
        <ShortAnswer
          question="OPTION C — Memory Verse Recitation: Write all six memory verses from this study from memory, without looking them up. After each one, write one sentence explaining how that verse connects to a specific scene in the novel."
          lines={18}
        />
      </DayCard>

    </div>
  );
}
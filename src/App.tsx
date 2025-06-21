const App = () => {
  const courseContent = [
    {
      stage: '第一阶段：AI 基础认知与战略启蒙 (AI Literacy & Strategic Vision)',
      goal: '目标：帮助企业高层与业务负责人建立AI基础认知，理解AI对企业数智化转型的战略意义。',
      sections: [
        { chapter: '决策导航', name: '《AI识局：洞察数智化转型新机遇》', benefit: '帮助企业高层及决策者建立AI基础认知，理解AI如何从根本上驱动业务模式创新和竞争力提升。' },
        { chapter: '蓝图构建', name: '《战略先行：AI驱动的数智化转型路线图》', benefit: '引导企业制定符合自身发展阶段的AI转型战略，明确AI在业务流程重塑、效率提升和价值创造中的定位。' },
        { chapter: '风险管理', name: '《负责任AI：构建安全可信赖的智能系统》', benefit: '强调AI发展中的伦理、安全、隐私与合规性问题，指导企业建立健全AI治理体系，确保AI应用的长期可持续发展和风险规避。' },
      ],
    },
    {
      stage: '第二阶段：AI 核心技术与业务场景应用 (Core AI Technologies & Business Applications)',
      goal: '目标：介绍企业中常用的AI技术及其业务应用，激发各部门代表识别自身业务场景。',
      sections: [
        { chapter: '数据活化', name: '《数据智能：发掘数据资产的AI潜力》', benefit: '讲解AI如何通过数据清洗、分析和建模，将企业沉睡数据转化为可驱动业务增长的智能洞察和精准预测。' },
        { chapter: '慧眼识微', name: '《智视未来：AI视觉在工业与自动化应用》', benefit: '深入解析AI视觉检测技术（如DL-based CV），展示其在产品质量控制、自动化生产线中识别复杂缺陷的强大能力和实践案例。' },
        { chapter: '效能飞跃', name: '《智能联动：AI在供应链降本增效中的应用》', benefit: '探讨AI如何赋能采购人实现更智能的决策和操作，有效提升企业供应链风险管理，动态监控市场采购价格，以及预测价格走势。' },
        { chapter: '智慧辅助', name: '《AI决策：从规则到智能辅助决策》', benefit: '介绍AI在辅助决策中的应用，包括专家系统、推荐系统以及基于AI的流程优化，帮助企业提升决策的科学性和效率。' },
      ],
    },
    {
      stage: '第三阶段：AI 项目落地与组织转型 (AI Implementation & Organizational Transformation)',
      goal: '目标：指导客户进行AI项目的实际落地，解决实施中的组织与技术挑战，并共同规划POC项目。',
      sections: [
        { chapter: '实践之道', name: '《AI项目管理：从概念到规模化部署》', benefit: '提供AI项目从需求分析、数据准备、模型开发到部署运维的全生命周期管理框架（MLOps），确保AI解决方案高效落地和持续迭代。' },
        { chapter: '赋能成长', name: '《人才与文化：打造AI就绪型组织》', benefit: '探讨AI时代企业组织结构、跨部门协作机制、人才培养（AI素养与技能）和创新文化建设的关键要素，帮助企业构建持续创新和自我优化的AI生态。' },
        { chapter: '价值共建', name: '《AI应用场景共创坊》', benefit: '通过互动工作坊形式，在专家教练指导下，帮助客户各部门代表自主挖掘、设计并初步评估符合企业实际的AI应用场景，形成具体的POC（概念验证）方案构想。' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 font-inter text-gray-800">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter Font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Main Title Section */}
      <div className="text-center mb-12 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
        <h1 className="text-5xl font-extrabold text-blue-800 leading-tight mb-4">
          AI 战略筑基：从0到1打造企业智能转型框架
        </h1>
        <p className="text-xl font-medium text-gray-600 mb-6">
          —— 工业 4.0 时代下的人工智能战略部署与落地工作坊 ——
        </p>
        <p className="text-2xl font-semibold text-purple-700">
          【3天解锁AI转型】企业自研AI竞争力速建课
        </p>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          本课程旨在从零到一系统地帮助企业搭建人工智能 (AI) 转型的战略与框架，协同企业各部门对AI应用以及概念落地，培养企业的自研AI核心竞争力，帮助企业在工业4.0大环境下提前布局AI在智能制造中的成熟应用，助力企业实现AI辅助人类生产力的提升。
        </p>
      </div>

      {/* Course Stages */}
      {courseContent.map((stageData, stageIndex) => (
        <div key={stageIndex} className="mb-12">
          <div className="bg-blue-600 text-white p-5 rounded-t-xl shadow-md">
            <h2 className="text-2xl font-bold mb-1">{stageData.stage.split('(')[0].trim()}</h2>
            <p className="text-lg font-light italic">{stageData.stage.split('(')[1]}</p>
            <p className="text-base mt-2">{stageData.goal}</p>
          </div>
          <div className="bg-white p-6 rounded-b-xl shadow-lg border border-blue-200">
            {stageData.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={`flex flex-col md:flex-row items-start py-4 ${sectionIndex < stageData.sections.length - 1 ? 'border-b border-gray-200' : ''}`}>
                {/* Chapter Column */}
                <div className="flex-shrink-0 w-full md:w-1/6 mb-3 md:mb-0">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
                    {section.chapter}
                  </span>
                </div>
                {/* Course Name & Benefit Columns */}
                <div className="flex-grow w-full md:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{section.name}</h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">{section.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;


if(typeof r1_bestOrder !== 'undefined') r1_bestOrder  = r1_bestOrder.replace(/\*/g, "⨝"); 
if(typeof r2_bestOrder !== 'undefined') r2_bestOrder  = r2_bestOrder.replace(/\*/g, "⨝");
if(typeof r3_bestOrder !== 'undefined') r3_bestOrder  = r3_bestOrder.replace(/\*/g, "⨝");
if(typeof r4_bestOrder !== 'undefined') r4_bestOrder  = r4_bestOrder.replace(/\*/g, "⨝");
if(typeof r5_bestOrder !== 'undefined')r5_bestOrder   = r5_bestOrder.replace(/\*/g, "⨝");
if(typeof r6_bestOrder !== 'undefined') r6_bestOrder  = r6_bestOrder.replace(/\*/g, "⨝");
if(typeof r7_bestOrder !== 'undefined') r7_bestOrder  = r7_bestOrder.replace(/\*/g, "⨝");
if(typeof r8_bestOrder !== 'undefined') r8_bestOrder  = r8_bestOrder.replace(/\*/g, "⨝");
if(typeof r9_bestOrder !== 'undefined') r9_bestOrder  = r9_bestOrder.replace(/\*/g, "⨝");
if(typeof r10_bestOrder !== 'undefined') r10_bestOrder = r10_bestOrder.replace(/\*/g, "⨝");
if(typeof r11_bestOrder !== 'undefined') r11_bestOrder = r11_bestOrder.replace(/\*/g, "⨝");
if(typeof r12_bestOrder !== 'undefined') r12_bestOrder = r12_bestOrder.replace(/\*/g, "⨝");
if(typeof r13_bestOrder !== 'undefined') r13_bestOrder = r13_bestOrder.replace(/\*/g, "⨝");
if(typeof r14_bestOrder !== 'undefined') r14_bestOrder = r14_bestOrder.replace(/\*/g, "⨝");
if(typeof r15_bestOrder !== 'undefined') r15_bestOrder = r15_bestOrder.replace(/\*/g, "⨝");
if(typeof r16_bestOrder !== 'undefined') r16_bestOrder = r16_bestOrder.replace(/\*/g, "⨝");
if(typeof r17_bestOrder !== 'undefined') r17_bestOrder = r17_bestOrder.replace(/\*/g, "⨝");
if(typeof r18_bestOrder !== 'undefined') r18_bestOrder = r18_bestOrder.replace(/\*/g, "⨝");
if(typeof r19_bestOrder !== 'undefined') r19_bestOrder = r19_bestOrder.replace(/\*/g, "⨝");
if(typeof r20_bestOrder !== 'undefined') r20_bestOrder = r20_bestOrder.replace(/\*/g, "⨝");
if(typeof r21_bestOrder !== 'undefined') r21_bestOrder = r21_bestOrder.replace(/\*/g, "⨝");
if(typeof r22_bestOrder !== 'undefined') r22_bestOrder = r22_bestOrder.replace(/\*/g, "⨝");
if(typeof r23_bestOrder !== 'undefined') r23_bestOrder = r23_bestOrder.replace(/\*/g, "⨝");
if(typeof r24_bestOrder !== 'undefined') r24_bestOrder = r24_bestOrder.replace(/\*/g, "⨝");
if(typeof r25_bestOrder !== 'undefined') r25_bestOrder = r25_bestOrder.replace(/\*/g, "⨝");
if(typeof r26_bestOrder !== 'undefined') r26_bestOrder = r26_bestOrder.replace(/\*/g, "⨝");
if(typeof r27_bestOrder !== 'undefined') r27_bestOrder = r27_bestOrder.replace(/\*/g, "⨝");
if(typeof r28_bestOrder !== 'undefined') r28_bestOrder = r28_bestOrder.replace(/\*/g, "⨝");
if(typeof r29_bestOrder !== 'undefined') r29_bestOrder = r29_bestOrder.replace(/\*/g, "⨝");
if(typeof r30_bestOrder !== 'undefined') r30_bestOrder = r30_bestOrder.replace(/\*/g, "⨝");
if(typeof r31_bestOrder !== 'undefined') r31_bestOrder = r31_bestOrder.replace(/\*/g, "⨝");

var join = "⨝";

if (number_of_join == 2) {
  var treeData = [
    {
      name: join,
      parent: "",
      children: [
        {
          name: name1,
          parent: "",
        },
        {
          name: name2,
          parent: "",
        },
      ],
    },
  ];
  $("#table-row").html(
    "<tr> \
  <td class='text-center'>" +
      r1_relations +
      "</td> \
  <td class='text-center'>" +
      r1_size +
      "</td>      \
  <td class='text-center'>" +
      r1_cost +
      "</td>      \
  <td class='text-center'>" +
      r1_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r2_relations +
      "</td> \
  <td class='text-center'>" +
      r2_size +
      "</td>      \
  <td class='text-center'>" +
      r2_cost +
      "</td>      \
  <td class='text-center'>" +
      r2_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r3_relations +
      "</td> \
  <td class='text-center'>" +
      r3_size +
      "</td>      \
  <td class='text-center'>" +
      r3_cost +
      "</td>      \
  <td class='text-center'>" +
      r3_bestOrder +
      "</td> \
  </tr>"
  );
}

if (number_of_join == 3) {
  var treeData = [
    {
      name: join,
      parent: "",
      children: [
        {
          name: join,
          parent: "",
          children: [
            {
              name: name1,
              parent: "",
            },
            {
              name: name2,
              parent: "",
            },
          ],
        },
        {
          name: name3,
          parent: "",
        },
      ],
    },
  ];
  $("#table-row").html(
    "<tr> \
  <td class='text-center'>" +
      r1_relations +
      "</td> \
  <td class='text-center'>" +
      r1_size +
      "</td>      \
  <td class='text-center'>" +
      r1_cost +
      "</td>      \
  <td class='text-center'>" +
      r1_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r2_relations +
      "</td> \
  <td class='text-center'>" +
      r2_size +
      "</td>      \
  <td class='text-center'>" +
      r2_cost +
      "</td>      \
  <td class='text-center'>" +
      r2_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r3_relations +
      "</td> \
  <td class='text-center'>" +
      r3_size +
      "</td>      \
  <td class='text-center'>" +
      r3_cost +
      "</td>      \
  <td class='text-center'>" +
      r3_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r4_relations +
      "</td> \
  <td class='text-center'>" +
      r4_size +
      "</td>      \
  <td class='text-center'>" +
      r4_cost +
      "</td>      \
  <td class='text-center'>" +
      r4_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r5_relations +
      "</td> \
  <td class='text-center'>" +
      r5_size +
      "</td>      \
  <td class='text-center'>" +
      r5_cost +
      "</td>      \
  <td class='text-center'>" +
      r5_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r6_relations +
      "</td> \
  <td class='text-center'>" +
      r6_size +
      "</td>      \
  <td class='text-center'>" +
      r6_cost +
      "</td>      \
  <td class='text-center'>" +
      r6_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r7_relations +
      "</td> \
  <td class='text-center'>" +
      r7_size +
      "</td>      \
  <td class='text-center'>" +
      r7_cost +
      "</td>      \
  <td class='text-center'>" +
      r7_bestOrder +
      "</td> \
  </tr>"
  );
}

if (number_of_join == 4) {
  var treeData = [
    {
      name: join,
      parent: "",
      children: [
        {
          name: join,
          parent: "",
          children: [
            {
              name: join,
              parent: "",
              children: [
                {
                  name: name1,
                  parent: "",
                },
                {
                  name: name2,
                  parent: "",
                },
              ],
            },
            {
              name: name3,
              parent: "",
            },
          ],
        },
        {
          name: name4,
          parent: "",
        },
      ],
    },
  ];
  $("#table-row").html(
    "<tr> \
  <td class='text-center'>" +
      r1_relations +
      "</td> \
  <td class='text-center'>" +
      r1_size +
      "</td>      \
  <td class='text-center'>" +
      r1_cost +
      "</td>      \
  <td class='text-center'>" +
      r1_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r2_relations +
      "</td> \
  <td class='text-center'>" +
      r2_size +
      "</td>      \
  <td class='text-center'>" +
      r2_cost +
      "</td>      \
  <td class='text-center'>" +
      r2_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r3_relations +
      "</td> \
  <td class='text-center'>" +
      r3_size +
      "</td>      \
  <td class='text-center'>" +
      r3_cost +
      "</td>      \
  <td class='text-center'>" +
      r3_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r4_relations +
      "</td> \
  <td class='text-center'>" +
      r4_size +
      "</td>      \
  <td class='text-center'>" +
      r4_cost +
      "</td>      \
  <td class='text-center'>" +
      r4_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r5_relations +
      "</td> \
  <td class='text-center'>" +
      r5_size +
      "</td>      \
  <td class='text-center'>" +
      r5_cost +
      "</td>      \
  <td class='text-center'>" +
      r5_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r6_relations +
      "</td> \
  <td class='text-center'>" +
      r6_size +
      "</td>      \
  <td class='text-center'>" +
      r6_cost +
      "</td>      \
  <td class='text-center'>" +
      r6_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r7_relations +
      "</td> \
  <td class='text-center'>" +
      r7_size +
      "</td>      \
  <td class='text-center'>" +
      r7_cost +
      "</td>      \
  <td class='text-center'>" +
      r7_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r8_relations +
      "</td> \
  <td class='text-center'>" +
      r8_size +
      "</td>      \
  <td class='text-center'>" +
      r8_cost +
      "</td>      \
  <td class='text-center'>" +
      r8_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r9_relations +
      "</td> \
  <td class='text-center'>" +
      r9_size +
      "</td>      \
  <td class='text-center'>" +
      r9_cost +
      "</td>      \
  <td class='text-center'>" +
      r9_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r10_relations +
      "</td> \
  <td class='text-center'>" +
      r10_size +
      "</td>      \
  <td class='text-center'>" +
      r10_cost +
      "</td>      \
  <td class='text-center'>" +
      r10_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r11_relations +
      "</td> \
  <td class='text-center'>" +
      r11_size +
      "</td>      \
  <td class='text-center'>" +
      r11_cost +
      "</td>      \
  <td class='text-center'>" +
      r11_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r12_relations +
      "</td> \
  <td class='text-center'>" +
      r12_size +
      "</td>      \
  <td class='text-center'>" +
      r12_cost +
      "</td>      \
  <td class='text-center'>" +
      r12_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r13_relations +
      "</td> \
  <td class='text-center'>" +
      r13_size +
      "</td>      \
  <td class='text-center'>" +
      r13_cost +
      "</td>      \
  <td class='text-center'>" +
      r13_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r14_relations +
      "</td> \
  <td class='text-center'>" +
      r14_size +
      "</td>      \
  <td class='text-center'>" +
      r14_cost +
      "</td>      \
  <td class='text-center'>" +
      r14_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r15_relations +
      "</td> \
  <td class='text-center'>" +
      r15_size +
      "</td>      \
  <td class='text-center'>" +
      r15_cost +
      "</td>      \
  <td class='text-center'>" +
      r15_bestOrder +
      "</td> \
  </tr>"
  );
}

if (number_of_join == 5) {
  var treeData = [
    {
      name: join,
      parent: "null",
      children: [
        {
          name: join,
          parent: "",
          children: [
            {
              name: join,
              parent: "",
              children: [
                {
                  name: join,
                  parent: "",
                  children: [
                    {
                      name: name1,
                      parent: "",
                    },
                    {
                      name: name2,
                      parent: "",
                    },
                  ],
                },
                {
                  name: name3,
                  parent: "",
                },
              ],
            },
            {
              name: name4,
              parent: "",
            },
          ],
        },
        {
          name: name5,
          parent: "",
        },
      ],
    },
  ];
  $("#table-row").html(
    "<tr> \
  <td class='text-center'>" +
      r1_relations +
      "</td> \
  <td class='text-center'>" +
      r1_size +
      "</td>      \
  <td class='text-center'>" +
      r1_cost +
      "</td>      \
  <td class='text-center'>" +
      r1_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r2_relations +
      "</td> \
  <td class='text-center'>" +
      r2_size +
      "</td>      \
  <td class='text-center'>" +
      r2_cost +
      "</td>      \
  <td class='text-center'>" +
      r2_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r3_relations +
      "</td> \
  <td class='text-center'>" +
      r3_size +
      "</td>      \
  <td class='text-center'>" +
      r3_cost +
      "</td>      \
  <td class='text-center'>" +
      r3_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r4_relations +
      "</td> \
  <td class='text-center'>" +
      r4_size +
      "</td>      \
  <td class='text-center'>" +
      r4_cost +
      "</td>      \
  <td class='text-center'>" +
      r4_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r5_relations +
      "</td> \
  <td class='text-center'>" +
      r5_size +
      "</td>      \
  <td class='text-center'>" +
      r5_cost +
      "</td>      \
  <td class='text-center'>" +
      r5_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r6_relations +
      "</td> \
  <td class='text-center'>" +
      r6_size +
      "</td>      \
  <td class='text-center'>" +
      r6_cost +
      "</td>      \
  <td class='text-center'>" +
      r6_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r7_relations +
      "</td> \
  <td class='text-center'>" +
      r7_size +
      "</td>      \
  <td class='text-center'>" +
      r7_cost +
      "</td>      \
  <td class='text-center'>" +
      r7_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r8_relations +
      "</td> \
  <td class='text-center'>" +
      r8_size +
      "</td>      \
  <td class='text-center'>" +
      r8_cost +
      "</td>      \
  <td class='text-center'>" +
      r8_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r9_relations +
      "</td> \
  <td class='text-center'>" +
      r9_size +
      "</td>      \
  <td class='text-center'>" +
      r9_cost +
      "</td>      \
  <td class='text-center'>" +
      r9_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r10_relations +
      "</td> \
  <td class='text-center'>" +
      r10_size +
      "</td>      \
  <td class='text-center'>" +
      r10_cost +
      "</td>      \
  <td class='text-center'>" +
      r10_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r11_relations +
      "</td> \
  <td class='text-center'>" +
      r11_size +
      "</td>      \
  <td class='text-center'>" +
      r11_cost +
      "</td>      \
  <td class='text-center'>" +
      r11_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r12_relations +
      "</td> \
  <td class='text-center'>" +
      r12_size +
      "</td>      \
  <td class='text-center'>" +
      r12_cost +
      "</td>      \
  <td class='text-center'>" +
      r12_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r13_relations +
      "</td> \
  <td class='text-center'>" +
      r13_size +
      "</td>      \
  <td class='text-center'>" +
      r13_cost +
      "</td>      \
  <td class='text-center'>" +
      r13_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r14_relations +
      "</td> \
  <td class='text-center'>" +
      r14_size +
      "</td>      \
  <td class='text-center'>" +
      r14_cost +
      "</td>      \
  <td class='text-center'>" +
      r14_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r15_relations +
      "</td> \
  <td class='text-center'>" +
      r15_size +
      "</td>      \
  <td class='text-center'>" +
      r15_cost +
      "</td>      \
  <td class='text-center'>" +
      r15_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r16_relations +
      "</td> \
  <td class='text-center'>" +
      r16_size +
      "</td>      \
  <td class='text-center'>" +
      r16_cost +
      "</td>      \
  <td class='text-center'>" +
      r16_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r17_relations +
      "</td> \
  <td class='text-center'>" +
      r17_size +
      "</td>      \
  <td class='text-center'>" +
      r17_cost +
      "</td>      \
  <td class='text-center'>" +
      r17_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r18_relations +
      "</td> \
  <td class='text-center'>" +
      r18_size +
      "</td>      \
  <td class='text-center'>" +
      r18_cost +
      "</td>      \
  <td class='text-center'>" +
      r18_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r19_relations +
      "</td> \
  <td class='text-center'>" +
      r19_size +
      "</td>      \
  <td class='text-center'>" +
      r19_cost +
      "</td>      \
  <td class='text-center'>" +
      r19_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r20_relations +
      "</td> \
  <td class='text-center'>" +
      r20_size +
      "</td>      \
  <td class='text-center'>" +
      r20_cost +
      "</td>      \
  <td class='text-center'>" +
      r20_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r21_relations +
      "</td> \
  <td class='text-center'>" +
      r21_size +
      "</td>      \
  <td class='text-center'>" +
      r21_cost +
      "</td>      \
  <td class='text-center'>" +
      r21_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r22_relations +
      "</td> \
  <td class='text-center'>" +
      r22_size +
      "</td>      \
  <td class='text-center'>" +
      r22_cost +
      "</td>      \
  <td class='text-center'>" +
      r22_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r23_relations +
      "</td> \
  <td class='text-center'>" +
      r23_size +
      "</td>      \
  <td class='text-center'>" +
      r23_cost +
      "</td>      \
  <td class='text-center'>" +
      r23_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r24_relations +
      "</td> \
  <td class='text-center'>" +
      r24_size +
      "</td>      \
  <td class='text-center'>" +
      r24_cost +
      "</td>      \
  <td class='text-center'>" +
      r24_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r25_relations +
      "</td> \
  <td class='text-center'>" +
      r25_size +
      "</td>      \
  <td class='text-center'>" +
      r25_cost +
      "</td>      \
  <td class='text-center'>" +
      r25_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r26_relations +
      "</td> \
  <td class='text-center'>" +
      r26_size +
      "</td>      \
  <td class='text-center'>" +
      r26_cost +
      "</td>      \
  <td class='text-center'>" +
      r26_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r27_relations +
      "</td> \
  <td class='text-center'>" +
      r27_size +
      "</td>      \
  <td class='text-center'>" +
      r27_cost +
      "</td>      \
  <td class='text-center'>" +
      r27_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r27_relations +
      "</td> \
  <td class='text-center'>" +
      r27_size +
      "</td>      \
  <td class='text-center'>" +
      r27_cost +
      "</td>      \
  <td class='text-center'>" +
      r27_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r28_relations +
      "</td> \
  <td class='text-center'>" +
      r28_size +
      "</td>      \
  <td class='text-center'>" +
      r28_cost +
      "</td>      \
  <td class='text-center'>" +
      r28_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r29_relations +
      "</td> \
  <td class='text-center'>" +
      r29_size +
      "</td>      \
  <td class='text-center'>" +
      r29_cost +
      "</td>      \
  <td class='text-center'>" +
      r29_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r30_relations +
      "</td> \
  <td class='text-center'>" +
      r30_size +
      "</td>      \
  <td class='text-center'>" +
      r30_cost +
      "</td>      \
  <td class='text-center'>" +
      r30_bestOrder +
      "</td> \
  </tr> <tr>                                    \
  <td class='text-center'>" +
      r31_relations +
      "</td> \
  <td class='text-center'>" +
      r31_size +
      "</td>      \
  <td class='text-center'>" +
      r31_cost +
      "</td>      \
  <td class='text-center'>" +
      r31_bestOrder +
      "</td> \
  </tr>"
  );
}

// ************** Generate the tree diagram  *****************
var margin = {top: 100, right: 150, bottom: 20, left: 480},
  width = 960 - margin.right - margin.left,
  height = 600 - margin.top - margin.bottom;

var i = 0;

var tree = d3.layout.tree().size([height, width]);

var diagonal = d3.svg.diagonal().projection(function (d) {
  return [d.x, d.y];
});

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];

update(root);

function update(source) {
  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function (d) {
    d.y = d.depth * 100;
  });

  // Declare the nodesâ€¦
  var node = svg.selectAll("g.node").data(nodes, function (d) {
    return d.id || (d.id = ++i);
  });

  // Enter the nodes.
  var nodeEnter = node
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  nodeEnter.append("circle").attr("r", 20).style("fill", "#fff");

  nodeEnter
    .append("text")
    .attr("x", function (d) {
      return d.children || d._children ? 9 : -7;
    })
    .attr("dy", ".35em")
    .attr("text-anchor", function (d) {
      return d.children || d._children ? "end" : "start";
    })
    .text(function (d) {
      return d.name;
    })
    .style("fill-opacity", 1);

  // Declare the linksâ€¦
  var link = svg.selectAll("path.link").data(links, function (d) {
    return d.target.id;
  });

  // Enter the links.
  link.enter().insert("path", "g").attr("class", "link").attr("d", diagonal);
}

var colors = new Array(
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0]
);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $(".gradient")
    .css({
      background:
        "-webkit-gradient(linear, left top, right top, from(" +
        color1 +
        "), to(" +
        color2 +
        "))",
    })
    .css({
      background:
        "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)",
    })
    .css({
      opacity: "80%",
    });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}

setInterval(updateGradient, 10);

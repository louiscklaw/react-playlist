    let schema = Yup.string().matches(REGEX_FW_HW_NUMBER_WITH_SPACE);
    let test_list = [
      ['　　', false],
      ['   ', false],
      [' 1 ', false],
      ['　１　', false],
      ['1', true],
      ['１', true],
      [' 1', false],
      ['　１', false],
      ['1 ', false],
      ['１　', false],
      ['2', true],
      ['a', false],
      ['1a', false],
      ['a1', false],
      ['1a1', false],
      ['a1a', false],
    ];
    test_list.forEach(([t, er]) => {
      schema.isValid(t).then((result) => {
        if (result !== er) {
          console.log('regex test', t, result);
        }
      });
    });
    console.log('done');

const accountTypeChecker = require('./index')

describe("Test 1", () => {
  it("The Balance is always the same", () => {
      const array =[
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 100},
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 200 },
          },
        }
      ];;
      const expectedResult = 'B'
      expect(accountTypeChecker(array)).toEqual(expectedResult);
  })});

  describe("Test 2", () => {
    it("The Balance is changing", () => {
        const array =[
          {
            monthNumber: 0, // current month
            account: {
              balance: { amount: 0 },
            },
          },
          {
            monthNumber: 1, // last month
            account: {
              balance: { amount: 100},
            },
          },
          {
            monthNumber: 2, // two months ago
            account: {
              balance: { amount: 150 },
            },
          }
        ];;
        const expectedResult = 'A'
        expect(accountTypeChecker(array)).toEqual(expectedResult);
    })});

    describe("Test 3", () => {
      it("The Balance is changing", () => {
          const array =[
            {
              monthNumber: 0, // current month
              account: {
                balance: { amount: 100 },
              },
            },
            {
              monthNumber: 1, // last month
              account: {
                balance: { amount: 0 },
              },
            },
            {
              monthNumber: 2, // two months ago
              account: {
                balance: { amount: 100 },
              },
            }
          ];;
          const expectedResult = 'A'
          expect(accountTypeChecker(array)).toEqual(expectedResult);
      })});

      describe("Test 4", () => {
        it("The Balance is changing", () => {
            const array =[
              {
                monthNumber: 0, // current month
                account: {
                  balance: { amount: 0 },
                },
              },
              {
                monthNumber: 1, // last month
                account: {
                  balance: { amount: 100 },
                },
              },
              {
                monthNumber: 2, // two months ago
                account: {
                  balance: { amount: 200 },
                },
              },
              {
                monthNumber: 3, // three months ago
                account: {
                  balance: { amount: 300 },
                },
              },
              {
                monthNumber: 4, // four  months ago
                account: {
                  balance: { amount: 301 },
                },
              }
            ];;
            const expectedResult = 'A'
            expect(accountTypeChecker(array)).toEqual(expectedResult);
        })});

        describe("Test 5", () => {
          it("The Balance is always the same", () => {
              const array =[
                {
                  monthNumber: 0, // current month
                  account: {
                    balance: { amount: 0 },
                  },
                },
                {
                  monthNumber: 1, // last month
                  account: {
                    balance: { amount: 100 },
                  },
                },
                {
                  monthNumber: 2, // two months ago
                  account: {
                    balance: { amount: 200 },
                  },
                },
                {
                  monthNumber: 3, // three months ago
                  account: {
                    balance: { amount: 300 },
                  },
                },
                {
                  monthNumber: 4, // four  months ago
                  account: {
                    balance: { amount: 400 },
                  },
                }
              ];;
              const expectedResult = 'B'
              expect(accountTypeChecker(array)).toEqual(expectedResult);
          })});

          describe("Test 6", () => {
            it("The Balance is always the same", () => {
                const array =[
                  {
                    monthNumber: 0, // current month
                    account: {
                      balance: { amount: 0 },
                    },
                  },
                  {
                    monthNumber: 1, // last month
                    account: {
                      balance: { amount: 100 },
                    },
                  },
                  {
                    monthNumber: 2, // two months ago
                    account: {
                      balance: { amount: 200 },
                    },
                  },
                  {
                    monthNumber: 4, // three months ago
                    account: {
                      balance: { amount: 400 },
                    },
                  },
                  {
                    monthNumber: 3, // four  months ago
                    account: {
                      balance: { amount: 300 },
                    },
                  }
                ];;
                const expectedResult = 'B'
                expect(accountTypeChecker(array)).toEqual(expectedResult);
            })});
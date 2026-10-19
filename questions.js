window.ANATOMIE_DATA = {
  "course": "Money and Banking – Final exam MC",
  "exams": [
    {
      "id": "rq",
      "label": "Representative questions (final)",
      "source": "The 18 MC questions of the current representative final-exam set (Canvas / Lecture 12)",
      "rev": 1,
      "questions": [
        {
          "num": 1,
          "qid": "RQ-1",
          "stem": "Mishkin discusses various factors that cause financial crises. Amongst these causes, the authors argue that the deterioration in the balance sheets of financial institutions leads to a contraction of capital and subsequent deleveraging. This means that",
          "options": [
            {
              "l": "a",
              "t": "banks have difficulties to obtain reserves and as such have to reduce lending to corporations."
            },
            {
              "l": "b",
              "t": "banks are confronted with a reduction in net worth and subsequently need to reduce lending to corporations."
            },
            {
              "l": "c",
              "t": "banks are confronted with an increase in the capital requirements of the Basel agreements through which they have to reduce lending to corporations."
            },
            {
              "l": "d",
              "t": "banks are confronted with large deposit withdrawals that reduce their capital and subsequently reduce their ability to lend to corporations."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Deleveraging is about capital, not liquidity: loan losses and asset write-downs eat into bank capital (net worth), and with less capital a bank has to shrink its assets, so it cuts lending. Option (a) is a reserves problem, (c) is not the mechanism, and (d) mixes up deposit outflows (liquidity) with capital losses.",
          "source": "Lecture 6, 'Deterioration in financial institutions' balance sheets'; Mishkin ch. 12",
          "origin": "Representative questions Q1 · also in: Old-exam pool #125"
        },
        {
          "num": 2,
          "qid": "RQ-2",
          "stem": "Mortgage A has a probability of not going into default of 80 percent, whereas mortgage B has a probability of default of 20 percent. Assume that the size of mortgage A is three times as large as the size of mortgage B and that the defaults of the two mortgages are perfectly correlated. The average probability of default of the portfolio of these two mortgages then",
          "options": [
            {
              "l": "a",
              "t": "is equal to 16 percent."
            },
            {
              "l": "b",
              "t": "is equal to 20 percent."
            },
            {
              "l": "c",
              "t": "is equal to 40 percent."
            },
            {
              "l": "d",
              "t": "cannot be calculated on the basis of the above information."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Mortgage A does not default with 80 %, so its PD is 20 %; B's PD is also 20 %. Weighted average PD = 0.75 × 20 % + 0.25 × 20 % = 20 %. The correlation of defaults does not change the average PD of the portfolio, only how risk is split across tranches.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Representative questions Q2 · also in: Old-exam pool #126"
        },
        {
          "num": 3,
          "qid": "RQ-3",
          "stem": "Within the process of securitisation, “senior” and “junior” tranches are created. Suppose that we have a portfolio of two mortgages of equal size with the same (positive) probability of default and that the defaults of these two mortgages are perfectly uncorrelated. This portfolio then is securitised. The risk of default of the “junior” tranche is",
          "options": [
            {
              "l": "a",
              "t": "equal to the sum of the default probabilities of the two mortgages."
            },
            {
              "l": "b",
              "t": "equal to the sum of the square of the default probability of the first mortgage and the square of the default probability of the second mortgage."
            },
            {
              "l": "c",
              "t": "higher than the average probability of default of the underlying portfolio of the two mortgages."
            },
            {
              "l": "d",
              "t": "is equal to the average probability of default of the underlying portfolio of the two mortgages divided by 2."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The junior tranche defaults as soon as at least one mortgage defaults: 1 − (1 − p)² = 2p − p², which is larger than the portfolio average p for any 0 < p < 1. Option (a) forgets to subtract p²; p² (the senior PD) is the probability that both default.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Representative questions Q3 · also in: Old-exam pool #127"
        },
        {
          "num": 4,
          "qid": "RQ-4",
          "stem": "The course discussed several nonconventional central bank policies. One of them is known as “management of expectations”. Which of the following statements is correctly describing “management of expectations”?",
          "options": [
            {
              "l": "a",
              "t": "The Fed announced that it would continue to sell massive amounts of corporate and government bonds in order to keep interest rates low."
            },
            {
              "l": "b",
              "t": "The Fed announced that it would guarantee bank lending to corporations against default risk."
            },
            {
              "l": "c",
              "t": "The Fed announced that it would maintain low nominal interest rates for an extended period of time in order to decrease inflation expectations and decrease real interest rates."
            },
            {
              "l": "d",
              "t": "The Fed used “management of expectations” in order to decrease long-term nominal interest rates, raise inflation expectations and reduce real interest rates."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Forward guidance (management of expectations): the Fed commits to keep short rates low for a long time. Via the expectations / liquidity premium theory this lowers long-term nominal rates, and by raising inflation expectations it pushes real rates down further. Option (c) has the inflation-expectations effect backwards; (a) says 'sell' instead of 'buy'.",
          "source": "Lecture 10, 'Nonconventional tools of monetary policy'",
          "origin": "Representative questions Q4 · also in: Old-exam pool #128"
        },
        {
          "num": 5,
          "qid": "RQ-5",
          "stem": "A Structured Investment Vehicle (SIV)",
          "options": [
            {
              "l": "a",
              "t": "invests in Asset-Backed Commercial Papers (ABCP) and finances itself via credit lines from the sponsoring bank."
            },
            {
              "l": "b",
              "t": "is exposed to funding liquidity risk as it finances itself via issuing Asset-Backed Securities (ABS) that have a long maturity."
            },
            {
              "l": "c",
              "t": "buys pools of credit contracts such as mortgages from banks in order to sell these contracts to investors."
            },
            {
              "l": "d",
              "t": "is potentially unstable since it is exposed to a so-called maturity mismatch."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "An SIV buys long-term ABS and finances itself by issuing short-term ABCP (about 90 days), so it has a maturity mismatch and funding liquidity risk. (a) reverses the roles (the SIV issues ABCP; the credit line is only a backstop), (b) wrongly says the SIV funds itself with long-term ABS, and (c) describes the SPV.",
          "source": "Lecture 7, 'Securitisation process: maturity mismatch'",
          "origin": "Representative questions Q5 · also in: Final exam 2020 Q3, Old-exam pool #129"
        },
        {
          "num": 6,
          "qid": "RQ-6",
          "stem": "Which of the below developments is not one of the key developments that preceded the financial crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "The bubble in house prices."
            },
            {
              "l": "b",
              "t": "The fact that the Federal Reserve had adopted a low-interest-rate policy in the years preceding the crisis."
            },
            {
              "l": "c",
              "t": "The massive sales of US-American government bonds by Asian countries."
            },
            {
              "l": "d",
              "t": "The downgrading of asset-backed commercial papers."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Asian countries bought (not sold) large amounts of US securities to keep their exchange rates export-friendly, which helped keep US interest rates low. The house price bubble, the Fed's low-rate policy and the downgrades are all part of the lecture's story.",
          "source": "Lecture 7, '(Too) low interest rates'",
          "origin": "Representative questions Q6 · also in: Old-exam pool #130"
        },
        {
          "num": 7,
          "qid": "RQ-7",
          "stem": "Most central banks nowadays focus on achieving price stability. You are given the following four alleged advantages of price stability:\nA. Preventing arbitrary redistribution of wealth and income.\nB. Reducing inflation risk premia in interest rates.\nC. Avoiding unnecessary hedging activities.\nD. Increasing benefits of holding cash.\n\nHow many of the above four advantages actually are advantages of price stability?",
          "options": [
            {
              "l": "a",
              "t": "one of the above four advantages."
            },
            {
              "l": "b",
              "t": "two of the above four advantages."
            },
            {
              "l": "c",
              "t": "three of the above four advantages."
            },
            {
              "l": "d",
              "t": "four of the above four advantages."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All four are on the lecture's list of six benefits of price stability: transparency of relative prices, fewer tax/social security distortions, no arbitrary redistribution, lower inflation risk premia, no unnecessary hedging, and higher benefits of holding cash (lower shoe-leather costs).",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Representative questions Q7 · also in: Old-exam pool #131"
        },
        {
          "num": 8,
          "qid": "RQ-8",
          "stem": "Which of the below statements is not correct?",
          "options": [
            {
              "l": "a",
              "t": "Independent central banks can be thought of having superior abilities to avoid the time-inconsistency problem."
            },
            {
              "l": "b",
              "t": "Independent central banks can avoid the political business cycle in the definition of monetary policy."
            },
            {
              "l": "c",
              "t": "Independent central banks are less likely to buy government bonds in the primary market."
            },
            {
              "l": "d",
              "t": "Independent central banks are more likely to use credit rationing to improve lending conditions."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Credit rationing is a bank's tool for managing credit risk and has nothing to do with central bank independence. (a)–(c) are the lecture's arguments for independence: it solves the time-inconsistency problem, avoids the political business cycle, and makes direct purchases of government bonds less likely.",
          "source": "Lecture 8, 'Should central banks be independent?'",
          "origin": "Representative questions Q8 · also in: Old-exam pool #132"
        },
        {
          "num": 9,
          "qid": "RQ-9",
          "stem": "The “Banking Union” in the euro area may consist of the following six mechanisms/organisations/programmes:\nA. Securities Markets Programme (SMP)\nB. Single Supervisory Mechanism (SSM)\nC. Outright Monetary Transactions (OMT)\nD. Single Resolution Mechanism (SRM)\nE. European Deposit Insurance Scheme (EDIS)\nF. Common Regulatory Action Programme (CRAP)\n\nHow many of the above six mechanisms/organisations/programmes actually do belong to the “Banking Union”?",
          "options": [
            {
              "l": "a",
              "t": "2"
            },
            {
              "l": "b",
              "t": "3"
            },
            {
              "l": "c",
              "t": "4"
            },
            {
              "l": "d",
              "t": "5"
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "The Banking Union has three pillars: SSM (supervision, 2014), SRM (resolution, 2016) and EDIS (deposit insurance, proposed but not yet active). SMP and OMT are ECB bond-buying programmes, and CRAP does not exist.",
          "source": "Lecture 8, 'Expanding role of the ECB'",
          "origin": "Representative questions Q9 · also in: Old-exam pool #133"
        },
        {
          "num": 10,
          "qid": "RQ-10",
          "stem": "Assume that you know the total amount of deposits (D) and the so-called currency ratio (c). This information suffices to allow you to calculate",
          "options": [
            {
              "l": "a",
              "t": "the amount of high-powered money"
            },
            {
              "l": "b",
              "t": "the money supply M1"
            },
            {
              "l": "c",
              "t": "the required reserves"
            },
            {
              "l": "d",
              "t": "none of the other three"
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "With C = c × D you get M1 = C + D = (1 + c) × D. The monetary base needs reserves (C + R), and required reserves need r, so neither can be calculated from D and c alone.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Representative questions Q10 · also in: Old-exam pool #134"
        },
        {
          "num": 11,
          "qid": "RQ-11",
          "stem": "Assume that monetary base (MB) is at 10,000 with currency in circulation (C) being at 5,000 and reserves (R) being at 5,000. You also know that the money multiplier is 4. What then is the sum of the excess reserve ratio (e) and the required reserve ratio (r), i.e. what is the level of e + r?",
          "options": [
            {
              "l": "a",
              "t": "1/7"
            },
            {
              "l": "b",
              "t": "1/6"
            },
            {
              "l": "c",
              "t": "1/5"
            },
            {
              "l": "d",
              "t": "None of the other three answers is correct."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "M = m × MB = 4 × 10,000 = 40,000 = C + D, so D = 35,000. Reserves R = (r + e) × D, so r + e = 5,000 / 35,000 = 1/7. Check: c = 1/7 and m = (1 + 1/7)/(1/7 + 1/7) = 4.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Representative questions Q11 · also in: Old-exam pool #135"
        },
        {
          "num": 12,
          "qid": "RQ-12",
          "stem": "The next question deals with the relation between the M1-money multiplier, m1, and the M2-money multiplier, m2. Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The M2-money multiplier, m2, is defined as m2 = (1 + c + e) / (r + t + c), where c is the currency ratio, e is the excess reserve ratio, r is the required reserve ratio and t is the ratio of time deposits over demand or sight (i.e. overnight) deposits."
            },
            {
              "l": "b",
              "t": "The M2-money multiplier is smaller than the M1-money multiplier provided that the currency ratio (c) is smaller than the required reserve ratio (r)."
            },
            {
              "l": "c",
              "t": "The M2-money multiplier is larger than the M1-money multiplier only if we assume that the amount of time deposits is smaller than the amount of demand or sight (i.e. overnight) deposits."
            },
            {
              "l": "d",
              "t": "The M2-money multiplier is larger than the M1-money multiplier if the amount of time deposits is larger than 0."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "With t = T/D, the M2 multiplier is m2 = (1 + c + t)/(r + e + c), while m1 = (1 + c)/(r + e + c). The denominators are the same, so m2 > m1 as soon as t > 0, i.e. as soon as there are any time deposits. Option (a) puts t in the wrong place.",
          "source": "Lecture 9 / Lecture 12; Mishkin ch. 15 (M2 multiplier)",
          "origin": "Representative questions Q12 · also in: Old-exam pool #136"
        },
        {
          "num": 13,
          "qid": "RQ-13",
          "stem": "Which of the following four statements is NOT correct? The interbank overnight interest rate in the euro area",
          "options": [
            {
              "l": "a",
              "t": "is called the €STR."
            },
            {
              "l": "b",
              "t": "can be larger than the deposit rate."
            },
            {
              "l": "c",
              "t": "can be influenced by actions of commercial banks."
            },
            {
              "l": "d",
              "t": "can be larger than the Marginal Lending Rate (MLR) + 100 basis points."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The marginal lending rate is the ceiling of the corridor: no bank pays more than the MLR in the interbank market when it can borrow from the ECB at the MLR. So €STR cannot exceed the MLR, let alone MLR + 100 bp. It can lie above the deposit rate (inside the corridor), and banks' demand for reserves does move it.",
          "source": "Lecture 10, 'Standing facilities at the ECB' and the market for reserves",
          "origin": "Representative questions Q13 · also in: Old-exam pool #137"
        },
        {
          "num": 14,
          "qid": "RQ-14",
          "stem": "The Securities Markets Programme (SMP) was controversial because",
          "options": [
            {
              "l": "a",
              "t": "the ECB promised to give direct credits to the governments of the euro area countries."
            },
            {
              "l": "b",
              "t": "it led to an increase in the amount of reserves in financial markets in the euro area."
            },
            {
              "l": "c",
              "t": "it led the ECB to buy government bonds in the primary market."
            },
            {
              "l": "d",
              "t": "of reasons that are different from the ones that are mentioned in the other three answers."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The SMP bought Italian and Spanish government bonds on the secondary market (no primary-market purchases, no direct credit to governments), and the extra reserves were sterilised. So (a), (b) and (c) describe things the SMP did not do, and the answer is (d).",
          "source": "Lecture 10, 'Securities Markets Programme (SMP, 2010-2012)'",
          "origin": "Representative questions Q14 · also in: Old-exam pool #138"
        },
        {
          "num": 15,
          "qid": "RQ-15",
          "stem": "Assume that the market for reserves is in equilibrium and that this equilibrium is characterised by a zero amount of borrowed reserves. A decrease in the ECB’s marginal lending rate, everything else held constant, i.e. ceteris paribus, then cannot change the ________ and the ________.",
          "options": [
            {
              "l": "a",
              "t": "amount of non-borrowed reserves; deposit rate"
            },
            {
              "l": "b",
              "t": "amount of borrowed reserves; currency ratio"
            },
            {
              "l": "c",
              "t": "amount of reserves that commercial banks create; simple deposit multiplier"
            },
            {
              "l": "d",
              "t": "amount of borrowed OMO; amount of non-borrowed reserves"
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "With zero borrowed reserves the equilibrium lies on the vertical part of the supply curve, below the lending rate. A lower marginal lending rate leaves non-borrowed reserves (set by OMOs) and the deposit rate (a separate tool) unchanged. Borrowed reserves can change once the MLR is cut below the market rate.",
          "source": "Lecture 10, market for reserves: response of i to changes in the lending rate",
          "origin": "Representative questions Q15 · also in: Old-exam pool #139"
        },
        {
          "num": 16,
          "qid": "RQ-16",
          "stem": "Price stability in the mandate of the European System of Central Banks is",
          "options": [
            {
              "l": "a",
              "t": "defined as “…a year-on-year increase in the Harmonized Index of Producer Prices (HIPP) for the euro area of 2%”."
            },
            {
              "l": "b",
              "t": "given a numerical value by the Board of Governors."
            },
            {
              "l": "c",
              "t": "not to be achieved by the European Systemic Risk Board."
            },
            {
              "l": "d",
              "t": "to be implemented in a decentralized manner by the national bank supervisors."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ECB itself (Governing Council) defines price stability as 2 % HICP (consumer, not producer prices) over the medium term. 'Board of Governors' is a Fed body, and implementation is through the national central banks, not bank supervisors. The ESRB is the EU's macroprudential body and has no price-stability task.",
          "source": "Lecture 10, 'Inflation targeting at the ECB'; Lecture 11 (ESRB)",
          "origin": "Representative questions Q16 · also in: Final exam 2020 Q15, Old-exam pool #140"
        },
        {
          "num": 17,
          "qid": "RQ-17",
          "stem": "Use the Taylor rule in the specification that was used in the lectures. Assume that you receive the following information: the equilibrium real interest rate is at 2 percent, the output gap is at 1 percent, the inflation target is at 1 percent and the actual inflation rate is at 3 percent. The nominal interest rate target that is to be set by the central bank according to the Taylor rule then is at",
          "options": [
            {
              "l": "a",
              "t": "4.5 percent."
            },
            {
              "l": "b",
              "t": "5.5 percent."
            },
            {
              "l": "c",
              "t": "6 percent."
            },
            {
              "l": "d",
              "t": "6.5 percent."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Taylor rule: i = π + r* + 0.5(π − π*) + 0.5 × output gap = 3 + 2 + 0.5 × (3 − 1) + 0.5 × 1 = 6.5 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Representative questions Q17 · also in: Old-exam pool #141"
        },
        {
          "num": 18,
          "qid": "RQ-18",
          "stem": "The so-called “inaction bias” in macroprudential regulation relates to",
          "options": [
            {
              "l": "a",
              "t": "the danger that the €STR is increased in small steps that restrict bank lending in a move to strengthen macroprudential regulation."
            },
            {
              "l": "b",
              "t": "the fact that loan-to-value ratios (one of the instruments of macroprudential regulation) tend to be changed in order to keep mortgage financing at its so-called “inaction point”."
            },
            {
              "l": "c",
              "t": "the danger that increased Basel minimum capital requirements stimulate banks to restricting lending."
            },
            {
              "l": "d",
              "t": "the fact that the costs of activating macroprudential instruments arise in the short term and are visible, whereas the benefits are longer-term and less obvious."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Inaction bias: activating a macroprudential instrument has costs that are immediate and visible (e.g. lower growth), while the benefits (a crisis that does not happen) are long-term and uncertain. That is why macroprudential regulators should be independent, which is why central banks take on this role.",
          "source": "Lecture 11, macroprudential regulation; Veestraeten (2019)",
          "origin": "Representative questions Q18 · also in: Old-exam pool #142"
        }
      ]
    },
    {
      "id": "f2025",
      "label": "Final exam October 2025",
      "source": "Most recent final · all 20 MC questions",
      "rev": 1,
      "questions": [
        {
          "num": 1,
          "qid": "F25-1",
          "stem": "Financial markets and financial intermediaries are regulated for various reasons. Which of the following four features is not one of the features of regulation of financial intermediaries?",
          "options": [
            {
              "l": "a",
              "t": "Ensuring that banks hold sufficiently large reserves."
            },
            {
              "l": "b",
              "t": "Requiring corporations to write and publish a prospectus prior to issuing stocks."
            },
            {
              "l": "c",
              "t": "Ensuring that pension funds only invest in “good quality” assets."
            },
            {
              "l": "d",
              "t": "Requiring banks to quickly increase their capital when the ratio of capital to risk-weighted assets falls below the levels that are determined within the Basel Accords."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A prospectus requirement regulates financial markets (issuers of stocks and bonds, information for investors), not financial intermediaries. Reserve requirements, asset restrictions for pension funds and prompt corrective action on capital are all regulation of intermediaries.",
          "source": "Lecture 11, 'Categories of financial regulation'",
          "origin": "Final exam Oct 2025 Q1 · also in: Old-exam pool #143"
        },
        {
          "num": 2,
          "qid": "F25-2",
          "stem": "Which of the following statements on the Basel Agreements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The Basel Agreements were introduced as an answer to the collapse of U.S.- American banks in the 1930s."
            },
            {
              "l": "b",
              "t": "Basel I required banks to keep a ratio of capital to risk-weighted liabilities of at least 8 percent."
            },
            {
              "l": "c",
              "t": "The Standardised Approach within Basel II required banks to treat all loans as equally risky since the earlier more differentiated system created a lack of transparency."
            },
            {
              "l": "d",
              "t": "The second pillar in the Basel II agreement required banks to submit their risk assessment to a supervisor."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Pillar II is the supervisory review: the bank assesses its own capital adequacy and supervisors check it. (a) Basel I was prompted by the Latin-American debt crisis of the 1980s; (b) the ratio is capital to risk-weighted assets; (c) the standardised approach uses more detailed risk categories based on credit ratings.",
          "source": "Lecture 11, Basel I and Basel II",
          "origin": "Final exam Oct 2025 Q2 · also in: Old-exam pool #144"
        },
        {
          "num": 3,
          "qid": "F25-3",
          "stem": "The paper on macroprudential policy in the course materials argued that macroprudential policy has to address the two dimensions of systemic risk. These two dimensions are the _________ risk and the ________ risk.",
          "options": [
            {
              "l": "a",
              "t": "cyclical or cross-sectional; time-varying or structural"
            },
            {
              "l": "b",
              "t": "countercyclical; time-inconsistency"
            },
            {
              "l": "c",
              "t": "cyclical or time-varying; cross-sectional or structural"
            },
            {
              "l": "d",
              "t": "undervaluation; composition"
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "Systemic risk has a cyclical (time-varying) dimension, how much risk builds up over the financial cycle, and a cross-sectional (structural) dimension, how risk is distributed and interconnected across institutions at a given moment.",
          "source": "Veestraeten (2019), macroprudential policy reading, section 2",
          "origin": "Final exam Oct 2025 Q3 · also in: Old-exam pool #145"
        },
        {
          "num": 4,
          "qid": "F25-4",
          "stem": "Financial innovations that emerged in the discussion on mortgage markets in the course included all of the following except",
          "options": [
            {
              "l": "a",
              "t": "time deposits."
            },
            {
              "l": "b",
              "t": "securitisation."
            },
            {
              "l": "c",
              "t": "asset-backed commercial papers."
            },
            {
              "l": "d",
              "t": "mortgage-backed securities."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Time deposits are a traditional banking product. Securitisation, ABCP and mortgage-backed securities are the financial innovations behind the 'originate to distribute' model.",
          "source": "Lecture 7, securitisation",
          "origin": "Final exam Oct 2025 Q4 · also in: Old-exam pool #146"
        },
        {
          "num": 5,
          "qid": "F25-5",
          "stem": "Credit-rating agencies may face a conflict of interest because they",
          "options": [
            {
              "l": "a",
              "t": "both advise clients on how to structure debt issues and determine the creditworthiness of the debt issues."
            },
            {
              "l": "b",
              "t": "underwrite securities and advise clients on how to structure debt issues."
            },
            {
              "l": "c",
              "t": "underwrite securities and determine the creditworthiness of the debt issues."
            },
            {
              "l": "d",
              "t": "both advise clients on how to structure debt issues and to write restrictive covenants."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Rating agencies advised issuers on how to structure products to get a good rating and then rated those same products, and they were paid by the issuers. The lecture lists this conflict of interest as a disadvantage of securitisation.",
          "source": "Lecture 7, 'Cons of securitisation'",
          "origin": "Final exam Oct 2025 Q5 · also in: Old-exam pool #147"
        },
        {
          "num": 6,
          "qid": "F25-6",
          "stem": "Consider two bonds A and B that are of identical size. Bond A has a probability of default equal to 0.20 (20%), and for Bond B the probability of default is at 0.20 (20%). Suppose that defaults of the two bonds are completely uncorrelated. Construct a portfolio of these two bonds and slice it into two tranches of identical size: a senior tranche (that defaults when both mortgages default) and a junior tranche (that defaults when at least one mortgage defaults). You have to consider the validity of the following six statements:\nA. the probability of default of the junior tranche is equal to 36%\nB. the probability of default of the junior tranche is equal to 64%\nC. the probability of default of the senior tranche is equal to 4%\nD. the average probability of default of the portfolio is at 40%\nE. credit enhancement is reduced if the correlation of the default probabilities increases\nF. the average probability of default of the portfolio is 20%, and credit enhancement is increased if the correlation of the default probabilities increases.\n\nHow many of the above six statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "2 of the above six statements are correct."
            },
            {
              "l": "b",
              "t": "3 of the above six statements are correct."
            },
            {
              "l": "c",
              "t": "4 of the above six statements are correct."
            },
            {
              "l": "d",
              "t": "5 of the above six statements are correct."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "howmany",
          "explanation": "PD = 0.2 for both. Junior: 1 − 0.8² = 36 % (A true, B false). Senior: 0.2² = 4 % (C true). Portfolio average 20 % (D false). Higher default correlation reduces credit enhancement (E true), so the second half of F is false. A, C and E are correct: 3.",
          "source": "Lecture 7, securitisation examples",
          "origin": "Final exam Oct 2025 Q6 · also in: Old-exam pool #148"
        },
        {
          "num": 7,
          "qid": "F25-7",
          "stem": "Amongst the many developments that took place before and during the Global Financial Crisis of 2007-2008 are the following five factors:\nA. The bubble in house prices.\nB. The large flows of capital into the US, especially from Asian countries in the years preceding the crisis.\nC. The fact that the Federal Reserve had adopted a low-interest-rate policy in the years preceding the crisis.\nD. The downgrading of Asset-Backed Securities (ABS) from 2007 onwards.\nE. The Asset Backed Commercial Papers (ABCP) had maturities that exceeded the maturities of the underlying Asset-Backed Securities (ABS) such that these ABCP often were not backed by sufficient collateral.\n\nHow many of the above five factors can indeed be seen as being relevant developments before and during the Global Financial Crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "1"
            },
            {
              "l": "b",
              "t": "2"
            },
            {
              "l": "c",
              "t": "3"
            },
            {
              "l": "d",
              "t": "the correct answer is not given amongst the other three answers."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "A–D are all part of the lecture's story: the housing bubble, Asian purchases of US securities (capital inflows), the Fed's low rates and the ABS downgrades from 2007. E is false: ABCP had shorter maturities than the ABS (that was the maturity mismatch). Four factors are relevant, which is not among options a–c.",
          "source": "Lecture 7",
          "origin": "Final exam Oct 2025 Q7 · also in: Old-exam pool #149"
        },
        {
          "num": 8,
          "qid": "F25-8",
          "stem": "In his analysis of the causes of financial crises, Mishkin also discusses the deterioration of the balance sheets of financial institutions. In particular, he mentions that such deterioration of the balance sheets of financial institutions implies a contraction of capital and subsequent deleveraging. The latter means that",
          "options": [
            {
              "l": "a",
              "t": "large withdrawals of deposits force financial institutions to reduce lending."
            },
            {
              "l": "b",
              "t": "large withdrawals of deposits force financial institutions to issue more bank stocks."
            },
            {
              "l": "c",
              "t": "value losses in their assets force financial institutions to issue more bank stocks in order to keep the ratio of capital to risk-weighted liabilities above 8 percent."
            },
            {
              "l": "d",
              "t": "value losses in their assets force financial institutions to reduce lending."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Deleveraging: value losses on assets (non-performing loans, falling collateral) reduce bank capital, so banks shrink their balance sheets by cutting lending. Deposit withdrawals are a liquidity problem, and issuing new shares is the opposite of deleveraging.",
          "source": "Lecture 6, 'Deterioration in financial institutions' balance sheets'",
          "origin": "Final exam Oct 2025 Q8 · also in: Exam Jan 2023 Q14, Old-exam pool #150"
        },
        {
          "num": 9,
          "qid": "F25-9",
          "stem": "Which of the following problems was mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "The sharp depreciation of the value of the legal tender of the crisis countries increased the value of the bank assets that were denominated in the legal tender of the crisis countries."
            },
            {
              "l": "b",
              "t": "The currency mismatch on the balance sheets of many banks and firms in the crisis countries generated massive increases (appreciations) in the value of the currencies of the crisis countries."
            },
            {
              "l": "c",
              "t": "The strong increase in bank lending in the crisis countries that preceded the crisis of 1997-1998 made that increasingly projects of superior quality were financed."
            },
            {
              "l": "d",
              "t": "Contagion during the East-Asian crisis meant that tensions spread quickly from Thailand to the other crisis countries."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "After the baht was floated on 2 July 1997, the turmoil spread within weeks to the other crisis countries (contagion, competitive depreciations). (a) The depreciation raised the value of foreign-currency liabilities, not domestic-currency assets; (b) the currency mismatch made a depreciation, not an appreciation, dangerous; (c) the lending boom financed worse and worse projects.",
          "source": "Lecture 6, 'The East-Asian crisis: the ultimate trigger'",
          "origin": "Final exam Oct 2025 Q9 · also in: Old-exam pool #151"
        },
        {
          "num": 10,
          "qid": "F25-10",
          "stem": "Assume that demand deposits (D) are at 10,000 and that the currency ratio (c) is at 20 percent. The money supply M = M1 then is at",
          "options": [
            {
              "l": "a",
              "t": "10,000/1.2"
            },
            {
              "l": "b",
              "t": "12,000"
            },
            {
              "l": "c",
              "t": "50,000"
            },
            {
              "l": "d",
              "t": "a level that cannot be calculated on the basis of the above information"
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "M1 = C + D = c × D + D = 0.2 × 10,000 + 10,000 = 12,000.",
          "source": "Lecture 9",
          "origin": "Final exam Oct 2025 Q10 · also in: Old-exam pool #60"
        },
        {
          "num": 11,
          "qid": "F25-11",
          "stem": "The ECB sells government bonds of €10,000,000 to the bank ABD. Before this sale, bank ABD had deposits of €100,000,000 and held reserves of €15,000,000 with the required reserve ratio being at 2%. What is the maximum amount of loans that bank ABD can give after its purchase of government bonds from the ECB has been booked? Assume that nothing else changes, i.e. ceteris paribus.",
          "options": [
            {
              "l": "a",
              "t": "€19,800,000"
            },
            {
              "l": "b",
              "t": "€20,000,000"
            },
            {
              "l": "c",
              "t": "€23,000,000"
            },
            {
              "l": "d",
              "t": "none of the other three answers is correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Bank ABD pays for the bonds with reserves: reserves fall from 15m to 5m, deposits stay at 100m. Required reserves = 2 % × 100m = 2m, so excess reserves = 3m, which is the maximum new lending. 3m is not among (a)–(c).",
          "source": "Lecture 9, open market operations; Lecture 5 liquidity management",
          "origin": "Final exam Oct 2025 Q11 · also in: Old-exam pool #152"
        },
        {
          "num": 12,
          "qid": "F25-12",
          "stem": "The banking system of country DEF is characterised by the following statistics. The amount of deposits is at 1,000, the currency ratio is at 20 percent, the excess reserves amount to 200 and the money multiplier is at 2. The required reserve ratio then is",
          "options": [
            {
              "l": "a",
              "t": "10 percent."
            },
            {
              "l": "b",
              "t": "20 percent."
            },
            {
              "l": "c",
              "t": "25 percent."
            },
            {
              "l": "d",
              "t": "impossible to determine on the basis of the information that is given."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "e = ER/D = 200/1,000 = 0.2 and c = 0.2. From m = (1 + c)/(r + e + c): 2 = 1.2/(r + 0.4), so r + 0.4 = 0.6 and r = 0.2 = 20 %.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Final exam Oct 2025 Q12 · also in: Exam Jan 2023 Q16, Final exam 2020 Q9, Old-exam pool #153"
        },
        {
          "num": 13,
          "qid": "F25-13",
          "stem": "Most central banks at the present point of time focus on achieving price stability. Which of the below four statements does not refer to an advantage of price stability?",
          "options": [
            {
              "l": "a",
              "t": "Decreasing transparency of relative prices."
            },
            {
              "l": "b",
              "t": "Reducing distortions of tax and social security systems."
            },
            {
              "l": "c",
              "t": "Preventing arbitrary redistribution of wealth and income."
            },
            {
              "l": "d",
              "t": "Increasing the benefits of holding cash."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability improves (not decreases) the transparency of relative prices. The other three are on the lecture's list of benefits.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Final exam Oct 2025 Q13 · also in: Old-exam pool #154"
        },
        {
          "num": 14,
          "qid": "F25-14",
          "stem": "Which is not a characteristic of the Federal Reserve System?",
          "options": [
            {
              "l": "a",
              "t": "The Federal Reserve System has a regional representation."
            },
            {
              "l": "b",
              "t": "The Federal Reserve Banks supervise and regulate financial institutions."
            },
            {
              "l": "c",
              "t": "The Federal Open Market Committee sets the reserve requirements."
            },
            {
              "l": "d",
              "t": "The implementation of open-market operations is decentralised at the level of the various Federal Reserve Banks."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "In the Fed system, open market operations are implemented centrally by the trading desk of the New York Fed, on the FOMC's directive. (Decentralised implementation through the national central banks is the euro-area set-up.) The Fed's 12 regional Reserve Banks and their supervisory role are real features.",
          "source": "Lecture 8, 'Federal Open Market Committee'",
          "origin": "Final exam Oct 2025 Q14 · also in: Old-exam pool #155"
        },
        {
          "num": 15,
          "qid": "F25-15",
          "stem": "The European Central Bank",
          "options": [
            {
              "l": "a",
              "t": "oversees all banks through the Single Supervisory Mechanism."
            },
            {
              "l": "b",
              "t": "oversees all banks through the Outright Monetary Transactions programme."
            },
            {
              "l": "c",
              "t": "instructs the national commercial banks to conduct open-market operations."
            },
            {
              "l": "d",
              "t": "decides on the minimum reserve requirements."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ECB's Governing Council decides on key interest rates, reserve requirements and liquidity provision. The SSM covers only significant banks directly; OMT is a bond-purchase programme; OMOs are carried out by the national central banks, not commercial banks.",
          "source": "Lecture 8, 'Governing Council'",
          "origin": "Final exam Oct 2025 Q15 · also in: Old-exam pool #156"
        },
        {
          "num": 16,
          "qid": "F25-16",
          "stem": "Which of the following advantages is not an advantage of central bank independence?",
          "options": [
            {
              "l": "a",
              "t": "Independent central banks are able to prevent mismatches between monetary policy and fiscal policy."
            },
            {
              "l": "b",
              "t": "Independent central banks avoid the political business cycle."
            },
            {
              "l": "c",
              "t": "Independent central banks are less likely to finance budget deficits by printing money or by directly purchasing government bonds on the primary market."
            },
            {
              "l": "d",
              "t": "Independent central banks can reduce the time-inconsistency problem in monetary policy."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A possible lack of coordination between monetary and fiscal policy is an argument against independence (e.g. US monetary contraction with fiscal expansion in the early 1980s). (b)–(d) are arguments in favour.",
          "source": "Lecture 8, 'Should central banks be independent?'",
          "origin": "Final exam Oct 2025 Q16 · also in: Old-exam pool #19"
        },
        {
          "num": 17,
          "qid": "F25-17",
          "stem": "Suppose that you read the following statement: “The overnight interbank interest rate in the market for reserves is below the ECB’s deposit interest rate.” This statement",
          "options": [
            {
              "l": "a",
              "t": "implies that the deposit interest rate will have to increase."
            },
            {
              "l": "b",
              "t": "implies that the overnight interbank interest rate will need to decrease further."
            },
            {
              "l": "c",
              "t": "implies that the lending rate of the ECB will have to decrease."
            },
            {
              "l": "d",
              "t": "does not make sense."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The deposit rate is the floor of the corridor: no bank lends reserves overnight below the rate it can earn by depositing them at the ECB. So an overnight rate below the deposit rate cannot occur, and the statement does not make sense.",
          "source": "Lecture 10, demand for reserves and standing facilities",
          "origin": "Final exam Oct 2025 Q17 · also in: Final exam 2020 Q14, Old-exam pool #157"
        },
        {
          "num": 18,
          "qid": "F25-18",
          "stem": "Which of the following is not a disadvantage of the Fed's approach to monetary policy?",
          "options": [
            {
              "l": "a",
              "t": "There is low transparency in monetary policy."
            },
            {
              "l": "b",
              "t": "There is low accountability for central bankers."
            },
            {
              "l": "c",
              "t": "This type of policy relies on the preferences of the policymakers in charge."
            },
            {
              "l": "d",
              "t": "It relies on a stable money-inflation relationship."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Relying on a stable money–inflation relationship is a drawback of monetary targeting. The Fed's implicit nominal anchor (dual mandate) is criticised for low transparency, low accountability and dependence on the people in charge.",
          "source": "Lecture 10, 'Implicit nominal anchor' and 'Monetary targeting'",
          "origin": "Final exam Oct 2025 Q18 · also in: Old-exam pool #158, Old-exam pool #202"
        },
        {
          "num": 19,
          "qid": "F25-19",
          "stem": "Which of the following is not an element of inflation targeting?",
          "options": [
            {
              "l": "a",
              "t": "A public announcement of a medium-term numerical target for the inflation rate."
            },
            {
              "l": "b",
              "t": "An institutional commitment to price stability as the primary long-run goal."
            },
            {
              "l": "c",
              "t": "An information approach in which only monetary aggregates are claimed to be central to making decisions on policy interest rates."
            },
            {
              "l": "d",
              "t": "Increased accountability of the central bank for attaining its inflation objectives."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Inflation targeting uses an information-inclusive approach in which many variables, not just monetary aggregates, feed into policy-rate decisions. The other three are elements of inflation targeting.",
          "source": "Lecture 10, 'Inflation targeting'",
          "origin": "Final exam Oct 2025 Q19 · also in: Old-exam pool #159"
        },
        {
          "num": 20,
          "qid": "F25-20",
          "stem": "Use the Taylor rule as it was described in the lectures. Assume that you receive the following information: the equilibrium real interest rate is at 1 percent, the output gap is at 1 percent, the inflation rate is at 3 percent and the nominal interest rate target of the central bank is at 5.5 percent. We then know that",
          "options": [
            {
              "l": "a",
              "t": "the inflation target is at 0 percent."
            },
            {
              "l": "b",
              "t": "the inflation target is at 0.5 percent."
            },
            {
              "l": "c",
              "t": "the inflation target is at 1 percent."
            },
            {
              "l": "d",
              "t": "the inflation target is at a level that is different from the levels that are specified in the other answers."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "5.5 = π + r* + 0.5(π − π*) + 0.5 × gap = 3 + 1 + 0.5(3 − π*) + 0.5. So 0.5(3 − π*) = 1, which gives π* = 1 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Final exam Oct 2025 Q20 · also in: Exam Jan 2023 Q20, Old-exam pool #70, Old-exam pool #160"
        }
      ]
    },
    {
      "id": "j2023",
      "label": "Exam January 2023",
      "source": "Q10–20 only · Q1–9 test pre-midterm material and are left out",
      "rev": 1,
      "questions": [
        {
          "num": 10,
          "qid": "J23-10",
          "stem": "The Swedish Bank Ruttör holds SEK 400 million in required reserves and SEK 50 million in excess reserves. The total amount of deposits of the Bank Ruttör is at SEK 2,000 million and the required reserve ratio amounts to 20 percent. Its capital is at SEK 300 million and this amounts to 10 percent of its risk-weighted assets. What is the amount of risk-weighted assets that this bank holds?",
          "options": [
            {
              "l": "a",
              "t": "SEK 2,550 million."
            },
            {
              "l": "b",
              "t": "SEK 3,000 million."
            },
            {
              "l": "c",
              "t": "SEK 3,450 million."
            },
            {
              "l": "d",
              "t": "This question cannot be answered without further information on the amount of government bonds that the Bank Ruttör holds."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Capital = 10 % of RWA, so RWA = 300 / 0.10 = SEK 3,000 million. The reserve and deposit figures are distractors.",
          "source": "Lecture 11, Basel capital ratio C / RWA",
          "origin": "Exam Jan 2023 Q10 · also in: Old-exam pool #258"
        },
        {
          "num": 11,
          "qid": "J23-11",
          "stem": "Which of the following four objectives is not amongst the intermediate objectives of macroprudential regulation?",
          "options": [
            {
              "l": "a",
              "t": "Reducing excessive credit growth and leverage."
            },
            {
              "l": "b",
              "t": "Preventing excessive maturity mismatch and market illiquidity."
            },
            {
              "l": "c",
              "t": "Reducing direct and indirect exposure concentrations."
            },
            {
              "l": "d",
              "t": "Mitigating the Basel agreements’ countercyclical effects."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ESRB's four intermediate objectives are to prevent (1) excessive credit growth and leverage, (2) excessive maturity mismatch and market illiquidity, (3) direct and indirect exposure concentrations, and (4) misaligned incentives and moral hazard. 'Mitigating the Basel agreements' countercyclical effects' is not one of them, and the problem with Basel II is procyclicality anyway.",
          "source": "Veestraeten (2019), section 3 'The intermediate objectives of macroprudential policy'",
          "origin": "Exam Jan 2023 Q11 · also in: Old-exam pool #259"
        },
        {
          "num": 12,
          "qid": "J23-12",
          "stem": "Consider the two bonds A and B that are of identical size. Bond A has a probability of default equal to 0.1 (10%), and for bond B the probability of default is at 0.3 (30%). Suppose that the defaults of the two bonds are completely uncorrelated. Construct a portfolio of these two bonds and subsequently slice that portfolio into two tranches of identical size, i.e. in a senior tranche and a junior tranche. Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The average probability of default of the portfolio of the two bonds is at 15%."
            },
            {
              "l": "b",
              "t": "The probability of default of the senior tranche is equal to 4%."
            },
            {
              "l": "c",
              "t": "The average probability of default of the portfolio that now consists of a senior and a junior tranche is lower than the average probability of default of the original portfolio of the two bonds due to credit enhancement."
            },
            {
              "l": "d",
              "t": "The probability of default of the junior tranche is equal to 37%."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "single",
          "explanation": "PD A = 0.1, PD B = 0.3, uncorrelated. Average = 20 % (not 15 %). Senior (both default) = 0.1 × 0.3 = 3 % (not 4 %). Junior (at least one defaults) = 1 − 0.9 × 0.7 = 37 %. Tranching redistributes risk, so the tranches still average 20 % and (c) is false.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Exam Jan 2023 Q12 · also in: Resit exam 2021 Q10, Old-exam pool #206"
        },
        {
          "num": 13,
          "qid": "J23-13",
          "stem": "In a famous study on the Global Financial Crisis of 2007-2008, the following statement can be found: “To ensure funding liquidity for the [structured investment] vehicle, the sponsoring bank grants a credit line to the vehicle, called a “liquidity backstop”.” Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "This “liquidity backstop” means that the sponsoring bank is obliged to buy back the Asset Backed Commercial Papers (ABCP) that the structured investment vehicle has bought from the sponsoring bank."
            },
            {
              "l": "b",
              "t": "This credit line reduces the liquidity risk that the sponsoring bank faces."
            },
            {
              "l": "c",
              "t": "This credit line guarantees that the structured investment vehicle can always buy Asset Backed Commercial Papers (ABCP) from the sponsoring bank."
            },
            {
              "l": "d",
              "t": "This credit line exposes the sponsoring bank to liquidity risks."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The liquidity backstop is a credit line the SIV can draw on when it cannot roll over its ABCP. The sponsoring bank must then supply liquidity, so the line exposes the bank to liquidity risk. The SIV issues ABCP to investors; it does not buy ABCP from the bank.",
          "source": "Lecture 7, 'Securitisation process: maturity mismatch'",
          "origin": "Exam Jan 2023 Q13 · also in: Old-exam pool #249, Old-exam pool #256"
        },
        {
          "num": 14,
          "qid": "F25-8",
          "stem": "In his analysis of the causes of financial crises, Mishkin also discusses the deterioration of the balance sheets of financial institutions. In particular, the author mentions that such deterioration of the balance sheets of financial institutions implies a contraction of capital and subsequent deleveraging. The latter means that",
          "options": [
            {
              "l": "a",
              "t": "large withdrawals of deposits force financial institutions to reduce lending."
            },
            {
              "l": "b",
              "t": "large withdrawals of deposits force financial institutions to issue more bank stocks."
            },
            {
              "l": "c",
              "t": "value losses in their assets force financial institutions to issue more bank stocks in order to keep the ratio of capital to risk-weighted liabilities above 8 percent."
            },
            {
              "l": "d",
              "t": "value losses in their assets force financial institutions to reduce lending."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Deleveraging: value losses on assets (non-performing loans, falling collateral) reduce bank capital, so banks shrink their balance sheets by cutting lending. Deposit withdrawals are a liquidity problem, and issuing new shares is the opposite of deleveraging.",
          "source": "Lecture 6, 'Deterioration in financial institutions' balance sheets'",
          "origin": "Exam Jan 2023 Q14 · also in: Final exam Oct 2025 Q8, Old-exam pool #150"
        },
        {
          "num": 15,
          "qid": "J23-15",
          "stem": "Assume that the money supply M = M1 is at 50,000, that the amount of currency in circulation (C) is at 2,000, that the amount of required reserves (RR) is at 18,000 and that the money multiplier is at 2.5. The amount of excess reserves (ER) then",
          "options": [
            {
              "l": "a",
              "t": "is at 0."
            },
            {
              "l": "b",
              "t": "is at 1,000."
            },
            {
              "l": "c",
              "t": "is at 2,000."
            },
            {
              "l": "d",
              "t": "cannot be determined on the basis of the above information."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "M1 = C + D gives D = 50,000 − 2,000 = 48,000. MB = M/m = 50,000/2.5 = 20,000 = C + R, so R = 18,000. With RR = 18,000, ER = R − RR = 0.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Exam Jan 2023 Q15 · also in: Old-exam pool #255"
        },
        {
          "num": 16,
          "qid": "F25-12",
          "stem": "The banking system of country DEF is characterised by the following statistics. The amount of deposits is at 1,000, the currency ratio is at 20 percent, the excess reserves amount to 200 and the money multiplier is at 2. The required reserve ratio then is",
          "options": [
            {
              "l": "a",
              "t": "10 percent."
            },
            {
              "l": "b",
              "t": "20 percent."
            },
            {
              "l": "c",
              "t": "25 percent."
            },
            {
              "l": "d",
              "t": "impossible to determine on the basis of the information that is given."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "e = ER/D = 200/1,000 = 0.2 and c = 0.2. From m = (1 + c)/(r + e + c): 2 = 1.2/(r + 0.4), so r + 0.4 = 0.6 and r = 0.2 = 20 %.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Exam Jan 2023 Q16 · also in: Final exam Oct 2025 Q12, Final exam 2020 Q9, Old-exam pool #153"
        },
        {
          "num": 17,
          "qid": "J23-17",
          "stem": "Which of the following statements on price stability is correct?",
          "options": [
            {
              "l": "a",
              "t": "Stable inflation rates and stable inflation expectations reduce real interest rates according to the Fisher parity."
            },
            {
              "l": "b",
              "t": "Central banks that focus on keeping inflation low do not choose a nominal anchor, but do choose a real anchor."
            },
            {
              "l": "c",
              "t": "Price stability has the disadvantage of hindering the central role that relative prices play in the allocation of factors of production."
            },
            {
              "l": "d",
              "t": "Price stability increases the benefits of holding cash."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability lowers 'shoe-leather costs', so holding cash becomes more attractive. (a) Stable inflation expectations lower inflation risk premia in nominal rates; the Fisher equation does not imply lower real rates. (b) An inflation target is a nominal anchor. (c) Price stability makes relative prices clearer, not less clear.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Exam Jan 2023 Q17 · also in: Final exam 2020 Q10, Old-exam pool #254"
        },
        {
          "num": 18,
          "qid": "J23-18",
          "stem": "You have to examine the validity of the following statements on independence of central banks.\nA. Instrument independence refers to the ability of the central bank to set the goals of monetary policy.\nB. Goal independence refers to the ability of the central bank to set the instruments of monetary policy.\nC. Financial independence refers to the ability of the central bank to give credits to political authorities whilst not allowing it to receive credits from political authorities.\nD. Political independence refers to the ability of the central bank to design fiscal policy without taking instructions from political authorities.\n\nHow many of the above four statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "0 of the above four statements are correct."
            },
            {
              "l": "b",
              "t": "1 of the above four statements is correct."
            },
            {
              "l": "c",
              "t": "2 of the above four statements are correct."
            },
            {
              "l": "d",
              "t": "3 of the above four statements are correct."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All four are wrong. A and B swap the definitions: instrument independence means setting the tools, goal independence means setting the goals. Financial independence means the central bank determines its own budget. Political independence means not taking instructions from politicians on monetary policy, not designing fiscal policy. So 0 are correct.",
          "source": "Lecture 8, 'Central bank independence'",
          "origin": "Exam Jan 2023 Q18"
        },
        {
          "num": 19,
          "qid": "J23-19",
          "stem": "If the central bank targets a monetary aggregate, it will lose control over the interest rate because",
          "options": [
            {
              "l": "a",
              "t": "of fluctuations in the demand for reserves."
            },
            {
              "l": "b",
              "t": "of fluctuations in the non-borrowed reserves."
            },
            {
              "l": "c",
              "t": "bond prices have the tendency to remain stable."
            },
            {
              "l": "d",
              "t": "targeting monetary aggregates is incompatible with achieving price stability."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "If the central bank fixes the quantity of reserves (or a monetary aggregate), every shift in the demand for reserves changes the interest rate. You cannot target a quantity and the interest rate at the same time.",
          "source": "Lecture 10, 'Tactics: choosing the policy instrument'",
          "origin": "Exam Jan 2023 Q19 · also in: Old-exam pool #200"
        },
        {
          "num": 20,
          "qid": "F25-20",
          "stem": "Use the Taylor rule as it was described in the lectures. Assume that you receive the following information: the equilibrium real interest rate is at 1 percent, the output gap is at 1 percent, the inflation rate is at 3 percent and the nominal interest rate target of the central bank is at 5.5 percent. We then know that",
          "options": [
            {
              "l": "a",
              "t": "the inflation target is at 0 percent."
            },
            {
              "l": "b",
              "t": "the inflation target is at 0.5 percent."
            },
            {
              "l": "c",
              "t": "the inflation target is at 1 percent."
            },
            {
              "l": "d",
              "t": "the inflation target is at a level that is different from the levels that are specified in the other answers."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "5.5 = π + r* + 0.5(π − π*) + 0.5 × gap = 3 + 1 + 0.5(3 − π*) + 0.5. So 0.5(3 − π*) = 1, which gives π* = 1 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Exam Jan 2023 Q20 · also in: Final exam Oct 2025 Q20, Old-exam pool #70, Old-exam pool #160"
        }
      ]
    },
    {
      "id": "r2021",
      "label": "Resit exam 2021",
      "source": "Q9–17 only · Q1–8 test pre-midterm material and are left out",
      "rev": 1,
      "questions": [
        {
          "num": 9,
          "qid": "R21-9",
          "stem": "Actions that are appropriate at the level of the individual bank may end up being destabilising for the financial system as a whole. This notion is referred to as",
          "options": [
            {
              "l": "a",
              "t": "the time-inconsistency problem."
            },
            {
              "l": "b",
              "t": "the fallacy of composition."
            },
            {
              "l": "c",
              "t": "the identification problem."
            },
            {
              "l": "d",
              "t": "none of the other answers is correct."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Fallacy of composition: what is rational for one bank (e.g. lending heavily to a booming sector, or using securitisation) becomes destabilising when every bank does it. This is the core argument for macroprudential, not just microprudential, regulation.",
          "source": "Lecture 11, macroprudential regulation of banks",
          "origin": "Resit exam 2021 Q9 · also in: Old-exam pool #267"
        },
        {
          "num": 10,
          "qid": "J23-12",
          "stem": "Consider the two bonds A and B that are of identical size. Bond A has a probability of default that is at 0.1 (10%) and the probability of not defaulting for bond B is at 0.7 (70%). Suppose that the defaults of the two bonds are completely uncorrelated. Construct a portfolio of these two bonds and subsequently slice that portfolio into two tranches of identical size, i.e. into a senior tranche and a junior tranche of identical size. Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The average probability of default of the portfolio of the two bonds is at 40%."
            },
            {
              "l": "b",
              "t": "The probability of default of the junior tranche is equal to 63%."
            },
            {
              "l": "c",
              "t": "The average probability of default of the portfolio that consists of a senior and a junior tranche is lower than the average probability of default of the original portfolio of the two bonds due to credit enhancement."
            },
            {
              "l": "d",
              "t": "The probability of default of the junior tranche is equal to 37%."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Bond B does not default with 70 %, so its PD is 0.3. Average PD = (0.1 + 0.3)/2 = 20 % (not 40 %). Junior = 1 − 0.9 × 0.7 = 37 % (63 % is the probability that neither bond defaults). Tranching only redistributes risk, so the tranches still average 20 % and (c) is false.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Resit exam 2021 Q10 · also in: Exam Jan 2023 Q12, Old-exam pool #206"
        },
        {
          "num": 11,
          "qid": "R21-11",
          "stem": "Which of the following problems was mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "Banks in the crisis countries lent heavily in US dollars to banks in the US, Europe and Japan and this created a maturity mismatch on their balance sheets."
            },
            {
              "l": "b",
              "t": "The currency mismatch and the decrease in the value of the US dollar meant that the domestic-currency value of the debt that was denominated in foreign currency increasingly eroded bank capital."
            },
            {
              "l": "c",
              "t": "The sharp increase in the value (appreciation) of the South-Korean won during the East-Asian crisis of 1997-1998 increased the value in won of bank debt that was denominated in US dollar."
            },
            {
              "l": "d",
              "t": "The sharp depreciation of the currencies of the crisis countries increased the value of the bank liabilities."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The sharp depreciations raised the domestic-currency value of the banks' dollar-denominated debt (currency mismatch), so their liabilities rose and net worth fell. (a) Banks borrowed abroad, they did not lend; (b) the dollar rose, it did not fall; (c) the won ultimately plunged.",
          "source": "Lecture 6, East-Asian crisis",
          "origin": "Resit exam 2021 Q11 · also in: Old-exam pool #14"
        },
        {
          "num": 12,
          "qid": "R21-12",
          "stem": "A deposit withdrawal by the non-bank public",
          "options": [
            {
              "l": "a",
              "t": "increases reserves, decreases currency in circulation and decreases the amount of high-powered money."
            },
            {
              "l": "b",
              "t": "has no effect on the size of the balance sheet of the non-bank public, but decreases the size of the balance sheets of the commercial banks and of the central bank."
            },
            {
              "l": "c",
              "t": "alters the composition of the monetary base but keeps the amount of high-powered money constant."
            },
            {
              "l": "d",
              "t": "reduces the size of the balance sheet of the non-bank public as well as that of the central bank, but leaves the size of the balance sheet of the commercial banks unchanged."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A withdrawal turns deposits into currency: R falls and C rises by the same amount, so MB = C + R stays the same and only its composition changes. Banks' balance sheets shrink, the public just swaps assets, and the central bank's balance sheet total is unchanged.",
          "source": "Lecture 9, 'Currency and/or deposit withdrawals'",
          "origin": "Resit exam 2021 Q12 · also in: Old-exam pool #268"
        },
        {
          "num": 13,
          "qid": "R21-13",
          "stem": "Assume that the required reserve ratio is at 10 percent, that the excess reserve ratio is at 20 percent and that the currency ratio is at 20 percent. In the money multiplier model, an amount of €1000 million for the monetary base then implies deposits of",
          "options": [
            {
              "l": "a",
              "t": "€1800 million."
            },
            {
              "l": "b",
              "t": "€2000 million."
            },
            {
              "l": "c",
              "t": "€2200 million."
            },
            {
              "l": "d",
              "t": "€2400 million."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "D = MB / (r + e + c) = 1,000 / (0.1 + 0.2 + 0.2) = 2,000. (M1 would be m × MB = 2.4 × 1,000 = 2,400.)",
          "source": "Lecture 9, money multiplier model",
          "origin": "Resit exam 2021 Q13 · also in: Old-exam pool #269"
        },
        {
          "num": 14,
          "qid": "R21-14",
          "stem": "Central banks increasingly focus on obtaining and guaranteeing price stability. This is due to the fact that low and stable inflation\nA. improves transparency of relative prices.\nB. reduces distortions of tax and social security systems.\nC. prevents arbitrary redistribution of wealth and income.\nD. reduces inflation risk premia in interest rates.\nE. avoids unnecessary hedging activities.\nF. increases the benefits of holding cash.\n\nHow many of the above six statements are truly advantages of low and stable inflation?",
          "options": [
            {
              "l": "a",
              "t": "3 of them are advantages of low and stable inflation."
            },
            {
              "l": "b",
              "t": "4 of them are advantages of low and stable inflation."
            },
            {
              "l": "c",
              "t": "5 of them are advantages of low and stable inflation."
            },
            {
              "l": "d",
              "t": "6 of them are advantages of low and stable inflation."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All six statements are exactly the lecture's six benefits of low and stable inflation.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Resit exam 2021 Q14"
        },
        {
          "num": 15,
          "qid": "R21-15",
          "stem": "The renowned Banking Union in the European Union has several goals. Which of the following is not one of the goals of the Banking Union?",
          "options": [
            {
              "l": "a",
              "t": "Dealing with the interrelations of banks within the euro area on a centralised level."
            },
            {
              "l": "b",
              "t": "Defining banking policy on a centralised level in order to avoid national differences that can create regulatory concerns as well as differences in the competitive position of banks."
            },
            {
              "l": "c",
              "t": "Ensuring that European banks hold the same amount of capital when compared with their US-American counterparts."
            },
            {
              "l": "d",
              "t": "Creating clearer mechanisms that prevent/reduce the need for calls upon the public purse."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The Banking Union aims to handle cross-border bank links centrally, ensure a level playing field, create clearer resolution mechanisms and minimise calls on the public purse. Matching US banks' capital levels is not one of its goals.",
          "source": "Lecture 8, 'Expanding role of the ECB'",
          "origin": "Resit exam 2021 Q15 · also in: Old-exam pool #270"
        },
        {
          "num": 16,
          "qid": "R21-16",
          "stem": "In the so-called market for reserves, we see the interplay of the demand for and the supply of reserves. You have to analyse the validity of the following seven statements.\nA. The supply curve of reserves is completely vertical since the central bank autonomously decides on the quantity of reserves.\nB. The overnight interbank interest rate cannot equal the lending rate without leading to arbitrage operations by the banking sector.\nC. The 7-day interest rate is determined by the intersection between supply and demand on the market for reserves.\nD. The so-called deposit rate always has to equal the overnight interbank interest rate.\nE. An increase in the overnight interbank interest rate above the lending rate indicates that banks lack trust with respect to each other.\nF. The demand for reserves initially is downward-sloping but becomes upward-sloping for a large enough quantity of reserves.\nG. OMOs increase the required reserve ratio.\n\nHow many of the above seven statements are not correct?",
          "options": [
            {
              "l": "a",
              "t": "four of the above statements are not correct."
            },
            {
              "l": "b",
              "t": "five of the above statements are not correct."
            },
            {
              "l": "c",
              "t": "six of the above statements are not correct."
            },
            {
              "l": "d",
              "t": "seven of the above statements are not correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All seven statements are wrong. A: supply is vertical only up to the lending rate, then horizontal. B: i can equal il; arbitrage would only arise if i > il. C: the market sets the overnight rate. D: the deposit rate is only the floor. E: i cannot rise above the lending rate. F: demand becomes flat at the deposit rate, never upward-sloping. G: OMOs change non-borrowed reserves, not the required reserve ratio.",
          "source": "Lecture 10, market for reserves",
          "origin": "Resit exam 2021 Q16"
        },
        {
          "num": 17,
          "qid": "R21-17",
          "stem": "Use the Taylor rule as it was described in the lectures. When the equilibrium real interest rate is at 3 percent, the positive output gap is at 2 percent, the target inflation rate is at 1 percent, and the actual inflation rate is at 2 percent, the nominal interest rate target set by the central bank should be at",
          "options": [
            {
              "l": "a",
              "t": "4.5 percent."
            },
            {
              "l": "b",
              "t": "5.5 percent."
            },
            {
              "l": "c",
              "t": "6 percent."
            },
            {
              "l": "d",
              "t": "6.5 percent."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "i = π + r* + 0.5(π − π*) + 0.5 × gap = 2 + 3 + 0.5 × 1 + 0.5 × 2 = 6.5 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Resit exam 2021 Q17"
        }
      ]
    },
    {
      "id": "f2020",
      "label": "Final exam 2020",
      "source": "All 17 MC questions",
      "rev": 1,
      "questions": [
        {
          "num": 1,
          "qid": "F20-1",
          "stem": "Regarding the selection of instruments of macroprudential policy, four requirements are listed. Which of the following is not amongst the requirements?",
          "options": [
            {
              "l": "a",
              "t": "The instrument must be effective in preventing the build-up of systemic risk, i.e. must be procyclical."
            },
            {
              "l": "b",
              "t": "The instrument must offer limited opportunities for arbitrage."
            },
            {
              "l": "c",
              "t": "The instrument must be aimed at the roots, not only at the symptoms of systemic risk."
            },
            {
              "l": "d",
              "t": "The instrument must be distortionary to the lowest possible extent to the financial system and the economy."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Instruments must be effective against the build-up of systemic risk, which means countercyclical, not procyclical. Limited arbitrage, targeting roots rather than symptoms, and minimal distortion are all on the lecture's list.",
          "source": "Lecture 11, 'Useful macroprudential instruments must ...'",
          "origin": "Final exam 2020 Q1"
        },
        {
          "num": 2,
          "qid": "F20-2",
          "stem": "In the analysis of the subprime crisis, we encountered the notion of “credit enhancement”. What is the correct description of this term?",
          "options": [
            {
              "l": "a",
              "t": "In securitisation, some tranches will have no default risk such that the average probability of default of the portfolio of all tranches decreases."
            },
            {
              "l": "b",
              "t": "The larger the number of securities in the underlying pool that will be securitised, the larger is the fraction of the tranches that ends up with higher credit ratings than the average."
            },
            {
              "l": "c",
              "t": "The larger the number of securities in the underlying pool that will be securitised, the larger is the fraction of the tranches that ends up with higher credit ratings than the average and this fraction increases when default rates are more correlated."
            },
            {
              "l": "d",
              "t": "Credit enhancement refers to the fact that after the subprime crisis, the bad credits were written off such that the average quality of the loans in the banks’ lending portfolios increased again."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Credit enhancement: the more securities in the pool, the larger the share of tranches with a lower PD than the pool average. (a) Tranching does not lower the average PD; (c) higher correlation reduces credit enhancement; (d) has nothing to do with securitisation.",
          "source": "Lecture 7, 'Securitisation: insights'",
          "origin": "Final exam 2020 Q2 · also in: Old-exam pool #208"
        },
        {
          "num": 3,
          "qid": "RQ-5",
          "stem": "A Structured Investment Vehicle (SIV)",
          "options": [
            {
              "l": "a",
              "t": "invests in Asset-Backed Commercial Papers (ABCP) and finances itself via credit lines from the sponsoring bank."
            },
            {
              "l": "b",
              "t": "is exposed to funding liquidity risk as it finances itself via issuing Asset-Backed Securities (ABS) that have a long maturity."
            },
            {
              "l": "c",
              "t": "buys pools of credit contracts such as mortgages from banks in order to sell these contracts to investors."
            },
            {
              "l": "d",
              "t": "is potentially unstable since it is exposed to a so-called maturity mismatch."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "An SIV buys long-term ABS and finances itself by issuing short-term ABCP (about 90 days), so it has a maturity mismatch and funding liquidity risk. (a) reverses the roles (the SIV issues ABCP; the credit line is only a backstop), (b) wrongly says the SIV funds itself with long-term ABS, and (c) describes the SPV.",
          "source": "Lecture 7, 'Securitisation process: maturity mismatch'",
          "origin": "Final exam 2020 Q3 · also in: Representative questions Q5, Old-exam pool #129"
        },
        {
          "num": 4,
          "qid": "F20-4",
          "stem": "Consider two mortgages of exactly the same size and assume also that each of them has a probability of default PD and that default risks are uncorrelated. These two mortgages are then pooled into one portfolio and that this portfolio subsequently is sliced into a so-called senior and a junior tranche. The probability of default of the senior tranche then is",
          "options": [
            {
              "l": "a",
              "t": "1 – ((1 – PD) * (1 – PD))."
            },
            {
              "l": "b",
              "t": "(1 – PD) * (1 – PD)."
            },
            {
              "l": "c",
              "t": "((1+PD) * (1+PD)) – 2*PD – 1."
            },
            {
              "l": "d",
              "t": "(PD * PD) – PD."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "single",
          "explanation": "The senior tranche defaults only if both mortgages default: PD × PD. Option (c) is (1 + PD)² − 2PD − 1 = PD². Option (a), 1 − (1 − PD)², is the junior tranche's PD.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Final exam 2020 Q4"
        },
        {
          "num": 5,
          "qid": "F20-5",
          "stem": "In their analysis of the causes of financial crises, the lectures mentioned the effects of an unanticipated decline in the value of the domestic currency. Such unanticipated decline in the value of the domestic currency worsens balance sheets through the",
          "options": [
            {
              "l": "a",
              "t": "decrease in the domestic-currency value of assets that are denominated in the foreign currency which then decreases net worth."
            },
            {
              "l": "b",
              "t": "increase in the domestic-currency value of assets that are denominated in the foreign currency which then decreases net worth."
            },
            {
              "l": "c",
              "t": "increase in the domestic-currency value of debts that are denominated in the foreign currency which then decreases net worth."
            },
            {
              "l": "d",
              "t": "decrease in the domestic-currency value of debts that are denominated in the foreign currency which then decreases net worth."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Currency mismatch: when the domestic currency loses value unexpectedly, debt denominated in foreign currency becomes worth more in domestic currency. Liabilities rise and net worth falls.",
          "source": "Lecture 6, 'Unanticipated decline in the value of the domestic currency'",
          "origin": "Final exam 2020 Q5"
        },
        {
          "num": 6,
          "qid": "F20-6",
          "stem": "Which of the following problems was mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "The fact that the liberalisation of the capital account prior to the crisis restricted capital inflows into the crisis countries."
            },
            {
              "l": "b",
              "t": "The fact that the inflation rates in the crisis countries prior to the crisis were below the inflation rate of the United States such that deflation risks in the US caused hefty capital inflows into the crisis countries."
            },
            {
              "l": "c",
              "t": "The balance sheets of firms and banks worsened due to the maturity mismatch that created the fear that appreciations of the currencies of the crisis countries would massively increase the domestic-currency value of debt that was denominated in foreign currency."
            },
            {
              "l": "d",
              "t": "The fact that the basket peg of the crisis countries ensured that the exchange rate of these countries remained constant against the US dollar prior to the outbreak of the crisis."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Before the crisis the five countries kept a virtually fixed exchange rate against the US dollar. (a) Capital-account liberalisation increased capital inflows; (b) inflation was higher than in the US; (c) the feared move was a depreciation, not an appreciation.",
          "source": "Lecture 6, 'The East-Asian crisis: major developments before the crisis'",
          "origin": "Final exam 2020 Q6 · also in: Old-exam pool #59"
        },
        {
          "num": 7,
          "qid": "F20-7",
          "stem": "Assume that checkable deposits (D) are at 10000 and that the currency ratio (c) is at 20 percent. The money supply M = M2 then is at",
          "options": [
            {
              "l": "a",
              "t": "10000/1.2"
            },
            {
              "l": "b",
              "t": "12000"
            },
            {
              "l": "c",
              "t": "50000"
            },
            {
              "l": "d",
              "t": "a level that cannot be calculated on the basis of the above information."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "D and c only give M1 = (1 + c) × D = 12,000. M2 also includes savings and time deposits, and we have no information on those.",
          "source": "Lecture 9, 'Measuring money'",
          "origin": "Final exam 2020 Q7"
        },
        {
          "num": 8,
          "qid": "F20-8",
          "stem": "Assume that the central bank buys €1,000,000 in government bonds from the banking sector. At the same time, the central bank increases the required reserve ratio from 1 percent to 4 percent. According to the simple model, this means that the money supply M1 after the increase of the required reserve ratio will increase by ________ rather than by _________ as in the original situation, i.e. the situation with the lower required reserve ratio.",
          "options": [
            {
              "l": "a",
              "t": "€25,000,000; €100,000,000."
            },
            {
              "l": "b",
              "t": "€100,000,000; €25,000,000."
            },
            {
              "l": "c",
              "t": "€4,000,000; €1,000,000."
            },
            {
              "l": "d",
              "t": "This question cannot be answered as we do not have information on the level of the deposits."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "respectively",
          "explanation": "Simple model: ΔD = ΔR / r. With r = 4 %: 1,000,000 / 0.04 = €25 million. With r = 1 %: 1,000,000 / 0.01 = €100 million.",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Final exam 2020 Q8"
        },
        {
          "num": 9,
          "qid": "F25-12",
          "stem": "The banking system of country DEF is characterised by the following statistics. The amount of deposits is at 1000, the currency ratio is at 20 percent, the excess reserves amount to 200 and the money multiplier is at 2. The required reserve ratio then is",
          "options": [
            {
              "l": "a",
              "t": "at 10 percent."
            },
            {
              "l": "b",
              "t": "at 20 percent."
            },
            {
              "l": "c",
              "t": "at 25 percent."
            },
            {
              "l": "d",
              "t": "impossible to determine on the basis of the information that is given."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "e = ER/D = 200/1,000 = 0.2 and c = 0.2. From m = (1 + c)/(r + e + c): 2 = 1.2/(r + 0.4), so r + 0.4 = 0.6 and r = 0.2 = 20 %.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Final exam 2020 Q9 · also in: Final exam Oct 2025 Q12, Exam Jan 2023 Q16, Old-exam pool #153"
        },
        {
          "num": 10,
          "qid": "J23-17",
          "stem": "Which of the following statements on price stability is correct?",
          "options": [
            {
              "l": "a",
              "t": "Stable inflation rates and stable inflation expectations reduce real interest rates according to the Fisher parity."
            },
            {
              "l": "b",
              "t": "Central banks that focus on keeping inflation low do not focus on a nominal anchor, but do focus upon a real anchor."
            },
            {
              "l": "c",
              "t": "Price stability has the disadvantage of hindering the central role that relative prices play in the allocation of the factors of production."
            },
            {
              "l": "d",
              "t": "Price stability increases the benefits of holding cash."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability lowers 'shoe-leather costs', so holding cash becomes more attractive. (a) Stable inflation expectations lower inflation risk premia in nominal rates; the Fisher equation does not imply lower real rates. (b) An inflation target is a nominal anchor. (c) Price stability makes relative prices clearer, not less clear.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Final exam 2020 Q10 · also in: Exam Jan 2023 Q17, Old-exam pool #254"
        },
        {
          "num": 11,
          "qid": "F20-11",
          "stem": "The Single Resolution Mechanism (SRM) implies that the ECB now is also responsible for the supervision of",
          "options": [
            {
              "l": "a",
              "t": "all significant banks in Europe."
            },
            {
              "l": "b",
              "t": "all banks in the euro area."
            },
            {
              "l": "c",
              "t": "all significant banks in the euro area."
            },
            {
              "l": "d",
              "t": "This question does not make sense."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The SRM is about resolving failing banks, while supervision of significant euro-area banks comes from the SSM. The premise 'SRM ⇒ supervision' is wrong, so the question does not make sense.",
          "source": "Lecture 8, SSM and SRM",
          "origin": "Final exam 2020 Q11"
        },
        {
          "num": 12,
          "qid": "F20-12",
          "stem": "You are given the following three statements on the Federal Reserve System:\nI. The Federal Reserve System has a regional representation.\nII. The Federal Reserve Banks supervise and regulate financial institutions.\nIII. Open-market operations are conducted in a centralised manner by the individual Federal Reserve Banks.\n\nHow many of the above statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "0"
            },
            {
              "l": "b",
              "t": "1"
            },
            {
              "l": "c",
              "t": "2"
            },
            {
              "l": "d",
              "t": "3"
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "I is true (12 regional Federal Reserve Banks) and II is true (they supervise and regulate). III is false: OMOs are executed centrally by the New York Fed's trading desk. Two statements are correct.",
          "source": "Lecture 8, structure of the Federal Reserve System",
          "origin": "Final exam 2020 Q12"
        },
        {
          "num": 13,
          "qid": "F20-13",
          "stem": "Which of the following is not an advantage of central bank independence?",
          "options": [
            {
              "l": "a",
              "t": "Independent central banks are more likely to focus on longer-run objectives."
            },
            {
              "l": "b",
              "t": "Independent central banks coordinate their decisions with politicians in a stricter manner."
            },
            {
              "l": "c",
              "t": "Independent central banks are less likely to directly purchase government bonds."
            },
            {
              "l": "d",
              "t": "Independent central banks are more likely to focus on stability of prices."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Closer coordination with politicians is not an argument for independence; independence is meant to shield the central bank from politicians. Ironically, a lack of coordination with fiscal policy is listed as a drawback of independence.",
          "source": "Lecture 8, 'Should central banks be independent?'",
          "origin": "Final exam 2020 Q13"
        },
        {
          "num": 14,
          "qid": "F25-17",
          "stem": "Suppose that you read the following statement: “Assume that everything else remains constant and that the overnight interbank interest rate in the market for reserves is below the ECB’s deposit interest rate.” This statement",
          "options": [
            {
              "l": "a",
              "t": "implies that the deposit interest rate will have to increase."
            },
            {
              "l": "b",
              "t": "implies that the overnight interbank interest rate will need to decrease further."
            },
            {
              "l": "c",
              "t": "implies that the lending rate will be steeply downward sloping in terms of the remaining term to maturity."
            },
            {
              "l": "d",
              "t": "does not make sense."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The deposit rate is the floor of the corridor: no bank lends reserves overnight below the rate it can earn by depositing them at the ECB. So an overnight rate below the deposit rate cannot occur, and the statement does not make sense.",
          "source": "Lecture 10, demand for reserves and standing facilities",
          "origin": "Final exam 2020 Q14 · also in: Final exam Oct 2025 Q17, Old-exam pool #157"
        },
        {
          "num": 15,
          "qid": "RQ-16",
          "stem": "Price stability in the mandate of the European System of Central Banks is",
          "options": [
            {
              "l": "a",
              "t": "defined as “…a year-on-year increase in the Harmonised Index of Producer Prices (HIPP) for the euro area, close to but below 2%”."
            },
            {
              "l": "b",
              "t": "given a numerical value by the Board of Governors."
            },
            {
              "l": "c",
              "t": "not to be achieved by the European Systemic Risk Board."
            },
            {
              "l": "d",
              "t": "to be obtained via monetary policy that is implemented in a decentralised manner by the national bank supervisors."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ECB itself (Governing Council) defines price stability as 2 % HICP (consumer, not producer prices) over the medium term. 'Board of Governors' is a Fed body, and implementation is through the national central banks, not bank supervisors. The ESRB is the EU's macroprudential body and has no price-stability task.",
          "source": "Lecture 10, 'Inflation targeting at the ECB'; Lecture 11 (ESRB)",
          "origin": "Final exam 2020 Q15 · also in: Representative questions Q16, Old-exam pool #140"
        },
        {
          "num": 16,
          "qid": "F20-16",
          "stem": "If the central bank targets a reserve aggregate, it is likely to lose control over _________ because _________ (everything else held constant in the market for reserves).",
          "options": [
            {
              "l": "a",
              "t": "the interest rate; of fluctuations in the demand for reserves"
            },
            {
              "l": "b",
              "t": "the required reserve ratio; of changes in the excess reserves"
            },
            {
              "l": "c",
              "t": "the lending rate; bond prices are inversely related to interest rates"
            },
            {
              "l": "d",
              "t": "the interest rate; of fluctuations in the business cycle over the medium-term"
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "With a fixed quantity of reserves, shifts in the demand for reserves move the interest rate. A central bank cannot target a reserve aggregate and the interest rate at the same time.",
          "source": "Lecture 10, 'Tactics: choosing the policy instrument'",
          "origin": "Final exam 2020 Q16"
        },
        {
          "num": 17,
          "qid": "F20-17",
          "stem": "Use the Taylor rule as it was described in the lectures. Assume that the following holds: the equilibrium real interest rate is at 1 percent, the output gap is at 1 percent, the inflation target is at 2 percent and the nominal interest rate target of the central bank is at 3.5 percent. We then know that",
          "options": [
            {
              "l": "a",
              "t": "the inflation rate is at 1 percent."
            },
            {
              "l": "b",
              "t": "the inflation rate is at 1.5 percent."
            },
            {
              "l": "c",
              "t": "the inflation rate is at 2 percent."
            },
            {
              "l": "d",
              "t": "the inflation rate cannot be calculated via the above information."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "3.5 = π + 1 + 0.5(π − 2) + 0.5 × 1 = 1.5π + 0.5, so π = 2 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Final exam 2020 Q17"
        }
      ]
    },
    {
      "id": "pool",
      "label": "Old-exam question pool (new questions)",
      "source": "47 questions from COMBINED-oldexam.pdf that are not in the five exams above · pre-midterm questions and duplicates removed",
      "rev": 1,
      "questions": [
        {
          "num": 11,
          "qid": "P-11",
          "stem": "The European Systemic Risk Board (ESRB) states that it allows for “guided discretion”. What is meant by “guided discretion”?",
          "options": [
            {
              "l": "a",
              "t": "In order to deal with unforeseeable positive and negative shocks, the ESRB proposes a mixture of rules- and discretion-based methods."
            },
            {
              "l": "b",
              "t": "An optimal degree of unpredictability in the actions of the ESRB ensures that commercial banks act in a more careful manner."
            },
            {
              "l": "c",
              "t": "In order to stimulate the economy, the ESRB can increase the countercyclical liquidity buffers."
            },
            {
              "l": "d",
              "t": "The time-inconsistency problem in microprudential regulation can be reduced by letting the ESRB follow a clear behaviour rule."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The reading notes that pure rules ignore unforeseeable shocks and new products, while pure discretion suffers from the inaction bias. The ESRB therefore proposes a mixture of rules and discretion and calls it 'guided discretion'.",
          "source": "Veestraeten (2019), section 4.3 'Policy implementation'",
          "origin": "Old-exam pool #11"
        },
        {
          "num": 12,
          "qid": "P-12",
          "stem": "Consider two bonds A and B that are of exactly the same size. Bond A has a probability of default equal to 0.20 (20 percent), and for Bond B the probability of not going into default is at 0.80 (80 percent). Suppose that the defaults of the two bonds are completely uncorrelated. Construct a portfolio of these two bonds and subsequently slice that portfolio into two identical-size tranches: a senior tranche (which is the first to be paid out of the cash flows of the underlying portfolio) and a junior tranche (which pays out after the senior tranche has been paid) as in the examples discussed during the lectures. You have to examine the validity of the below five statements:\nA. The probability of default of the junior tranche is equal to 36 percent.\nB. The probability of default of the junior tranche is equal to 48 percent.\nC. The average probability of default of the portfolio of the two bonds is at 40 percent.\nD. Adding a third bond with a probability of default of 8% to the portfolio that is to be sliced up, drives down the probability of default of the senior tranche. You should assume zero correlation of this third bond with the defaults of the bonds A and B and also that its size is identical when compared with the size of bonds A and B.\nE. Credit enhancement in this example will be smaller if the correlation of the default probabilities equals one.\n\nHow many of the above five statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "one of the above five statements is correct."
            },
            {
              "l": "b",
              "t": "two of the above five statements are correct."
            },
            {
              "l": "c",
              "t": "three of the above five statements are correct."
            },
            {
              "l": "d",
              "t": "four of the above five statements are correct."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "howmany",
          "explanation": "Both PDs are 0.2. A: junior = 1 − 0.8² = 36 %, true. B: false. C: the average is 20 %, so false. D: with a third bond the senior tranche defaults only if all three default: 0.2 × 0.2 × 0.08 = 0.32 % < 4 %, true. E: with perfect correlation there is no credit enhancement, true. A, D and E are correct: 3.",
          "source": "Lecture 7, securitisation examples 1 and 2",
          "origin": "Old-exam pool #12"
        },
        {
          "num": 13,
          "qid": "P-13",
          "stem": "Which of the following events was not present in the run-up to the Global Financial Crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "The “Great Moderation” that was characterised by stable and (very) low inflation rates."
            },
            {
              "l": "b",
              "t": "The strategy of low policy interest rates that the Federal Reserve adopted after the bursting of the Internet Bubble."
            },
            {
              "l": "c",
              "t": "The shift in the banking industry towards the “Originate and Hold” model."
            },
            {
              "l": "d",
              "t": "The large purchases of US government bonds by a number of Asian countries."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Banks moved away from 'originate and hold' towards 'originate to distribute'. The Great Moderation, the Fed's low rates after the dot-com bust and Asian purchases of US bonds were all part of the run-up.",
          "source": "Lecture 7",
          "origin": "Old-exam pool #13"
        },
        {
          "num": 15,
          "qid": "P-15",
          "stem": "The ECB sells €10,000,000 in government bonds to the bank ACDC. Suppose that bank ACDC has deposits of €100,000,000 and holds reserves of €15,000,000 with the required reserve ratio being at 5 percent. What is the maximum amount of loans that bank ACDC can give immediately after its purchase of government bonds from the ECB has been booked?",
          "options": [
            {
              "l": "a",
              "t": "€9,500,000"
            },
            {
              "l": "b",
              "t": "€10,000,000"
            },
            {
              "l": "c",
              "t": "€14,250,000"
            },
            {
              "l": "d",
              "t": "none of the other three answers is correct"
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "ACDC pays for the bonds with reserves: 15m becomes 5m, while deposits stay at 100m. Required reserves = 5 % × 100m = 5m, so excess reserves are 0 and the bank cannot lend anything. That is not among (a)–(c).",
          "source": "Lecture 9, open market operations",
          "origin": "Old-exam pool #15"
        },
        {
          "num": 16,
          "qid": "P-16",
          "stem": "The impact of the central bank upon the money supply process crucially depends on the so-called money multiplier. You have to examine the validity of the following four statements assuming that nothing else changes (i.e. ceteris paribus). Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The level of the money multiplier is completely determined by the central bank."
            },
            {
              "l": "b",
              "t": "The money multiplier is defined as the money supply divided by the monetary base."
            },
            {
              "l": "c",
              "t": "The money multiplier typically is larger than the simple deposit multiplier."
            },
            {
              "l": "d",
              "t": "The level of the money multiplier increases when the excess reserves ratio increases."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "m = M / MB by definition. (a) c and e depend on the public and on banks; (c) m < 1/r because of currency and excess reserves; (d) a higher e lowers m.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Old-exam pool #16"
        },
        {
          "num": 17,
          "qid": "P-17",
          "stem": "Which of the following is an advantage of low and stable positive rates of inflation in the euro area?",
          "options": [
            {
              "l": "a",
              "t": "The risk of deflation in member states is reduced."
            },
            {
              "l": "b",
              "t": "Distortions of tax and social security systems in member states are increased."
            },
            {
              "l": "c",
              "t": "Redistribution of wealth between lenders and borrowers in the member states is more of a danger."
            },
            {
              "l": "d",
              "t": "Inflation risk premia in interest rates increase in the weaker member states."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A low but positive inflation rate keeps a buffer against deflation, which is hard to escape (see lectures 6 and 10). Options (b)–(d) state the opposite of the benefits of price stability.",
          "source": "Lecture 8, 'Price stability'; Lecture 6 (debt deflation)",
          "origin": "Old-exam pool #17"
        },
        {
          "num": 18,
          "qid": "P-18",
          "stem": "Within the start of the Single Supervisory Mechanism (SSM), the ECB saw its mandate extend to",
          "options": [
            {
              "l": "a",
              "t": "bank supervision."
            },
            {
              "l": "b",
              "t": "bank resolution."
            },
            {
              "l": "c",
              "t": "macroprudential regulation of banks."
            },
            {
              "l": "d",
              "t": "bank supervision, bank resolution as well as macroprudential regulation of banks."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The SSM gave the ECB bank supervision (significant banks directly). Resolution came later through the SRM, and macroprudential policy lies with national authorities and the ESRB.",
          "source": "Lecture 8, 'Single Supervisory Mechanism'",
          "origin": "Old-exam pool #18"
        },
        {
          "num": 20,
          "qid": "P-20",
          "stem": "Amongst the tools of monetary policy, we find the so-called standing facilities. These standing facilities refer to",
          "options": [
            {
              "l": "a",
              "t": "the arrangements that central banks have with private banks concerning buying and selling of government bonds."
            },
            {
              "l": "b",
              "t": "the way the central bank can directly control the amount of required reserves that private banks hold."
            },
            {
              "l": "c",
              "t": "the system of interest rates that central banks set and at which banks can borrow and deposit reserves at the central bank."
            },
            {
              "l": "d",
              "t": "the credit lines that governments have at the central bank."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Standing facilities are the deposit facility (deposit rate) and the marginal lending facility (lending rate). Together they form the corridor for the overnight rate.",
          "source": "Lecture 10, 'Conventional tools of monetary policy'",
          "origin": "Old-exam pool #20"
        },
        {
          "num": 51,
          "qid": "P-51",
          "stem": "Financial markets and financial intermediaries are regulated for various reasons. Which of the following four features is one of the features of the regulation of financial intermediaries?",
          "options": [
            {
              "l": "a",
              "t": "requiring banks to quickly decrease their capital when their ratio of capital to risk-weighted assets rises above the levels that are determined within the Basel Accords."
            },
            {
              "l": "b",
              "t": "requiring pension funds to invest in so-called junk bonds."
            },
            {
              "l": "c",
              "t": "reducing the amount of deposits that are guaranteed within the deposit-insurance system."
            },
            {
              "l": "d",
              "t": "allowing commercial banks with liquidity problems to call upon the central bank in the latter’s role as lender of last resort (LOLR)."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The lender of last resort is one of the government safety nets, along with deposit insurance. The other three state the opposite of real regulation.",
          "source": "Lecture 11, 'Categories of financial regulation'",
          "origin": "Old-exam pool #51"
        },
        {
          "num": 52,
          "qid": "P-52",
          "stem": "When the capital of a bank falls below the minimum capital requirements of the Basel II agreement, the following action cannot bring it back towards fulfilling these requirements:",
          "options": [
            {
              "l": "a",
              "t": "Decreasing dividends."
            },
            {
              "l": "b",
              "t": "Decreasing capital."
            },
            {
              "l": "c",
              "t": "Selling government bonds that it owns and putting the proceeds into the reserves."
            },
            {
              "l": "d",
              "t": "Selling loans and putting the proceeds into the reserves."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Reducing capital lowers C / RWA even further. Cutting dividends raises C through retained earnings. Selling government bonds or loans and holding the proceeds as reserves (risk weight 0 %) lowers RWA.",
          "source": "Lecture 11, 'The danger of pro-cyclicality ...' (ways to raise C/RWA)",
          "origin": "Old-exam pool #52"
        },
        {
          "num": 53,
          "qid": "P-53",
          "stem": "Which of the following four objectives is not amongst the intermediate objectives of macroprudential regulation?",
          "options": [
            {
              "l": "a",
              "t": "Reducing excessive credit growth and leverage."
            },
            {
              "l": "b",
              "t": "Preventing excessive maturity mismatch and market illiquidity."
            },
            {
              "l": "c",
              "t": "Increasing direct and indirect exposure concentrations."
            },
            {
              "l": "d",
              "t": "Preventing misaligned incentives and moral-hazard incentives."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ESRB's objective is to prevent (reduce) direct and indirect exposure concentrations, not increase them. The other three are intermediate objectives.",
          "source": "Veestraeten (2019), section 3",
          "origin": "Old-exam pool #53"
        },
        {
          "num": 54,
          "qid": "P-54",
          "stem": "Which of the following events did not take place in the five years before the Global Financial Crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "Low interest rates."
            },
            {
              "l": "b",
              "t": "Low inflation rates."
            },
            {
              "l": "c",
              "t": "The securitisation process."
            },
            {
              "l": "d",
              "t": "The shift from the ‘originate to distribute’ to the ‘originate and hold’ model of banking."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The shift ran the other way, from 'originate and hold' to 'originate to distribute'. Low interest rates, low inflation and securitisation all marked the years before the crisis.",
          "source": "Lecture 7",
          "origin": "Old-exam pool #54"
        },
        {
          "num": 55,
          "qid": "P-55",
          "stem": "The so-called ‘junior’ tranches",
          "options": [
            {
              "l": "a",
              "t": "are the tranches with the highest risk and hence lowest expected return."
            },
            {
              "l": "b",
              "t": "are the tranches of securitised products that only pay out after all other tranches have been paid out."
            },
            {
              "l": "c",
              "t": "are the tranches that are sold to the most risk-averse investors."
            },
            {
              "l": "d",
              "t": "are the tranches that have the shortest duration."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Junior ('toxic waste') tranches are paid only after all other tranches. They carry the highest risk and therefore the highest expected return, and they go to investors with a large risk appetite.",
          "source": "Lecture 7, 'Securitisation: first and second steps'",
          "origin": "Old-exam pool #55"
        },
        {
          "num": 56,
          "qid": "P-56",
          "stem": "Consider a portfolio that consists of two corporate bonds that are identical to each other, except for their probability of default. The first corporate bond has a probability of default of 20 percent, whereas the second corporate bond has a probability of default of 30 percent. Assume that the defaults in the two bonds are completely uncorrelated to each other. The average probability of default of the portfolio of the senior and junior tranches is at ___ percent, the probability of default of the senior tranche is at ___ percent and the probability of default of the junior tranche is at ___ percent. You need to assume that the senior and junior tranche are of the same size.",
          "options": [
            {
              "l": "a",
              "t": "25; 6; 44"
            },
            {
              "l": "b",
              "t": "50; 25; 45"
            },
            {
              "l": "c",
              "t": "25; 12.5; 78.5"
            },
            {
              "l": "d",
              "t": "None of the other three answers is correct."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "respectively",
          "explanation": "Average PD = (0.2 + 0.3)/2 = 25 %. Senior = 0.2 × 0.3 = 6 %. Junior = 1 − 0.8 × 0.7 = 44 %. Check: (6 + 44)/2 = 25 %.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Old-exam pool #56"
        },
        {
          "num": 57,
          "qid": "P-57",
          "stem": "Rather than issuing long-term debt, a Structured Investment Vehicle (SIV) typically sells",
          "options": [
            {
              "l": "a",
              "t": "asset-backed government bonds."
            },
            {
              "l": "b",
              "t": "asset-backed subprime corporate bonds."
            },
            {
              "l": "c",
              "t": "asset-backed commercial papers."
            },
            {
              "l": "d",
              "t": "deposits."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "SIVs financed their long-term ABS holdings by issuing short-term asset-backed commercial paper.",
          "source": "Lecture 7, 'Securitisation process: maturity mismatch'",
          "origin": "Old-exam pool #57"
        },
        {
          "num": 58,
          "qid": "P-58",
          "stem": "Debt deflation is defined as a situation in which",
          "options": [
            {
              "l": "a",
              "t": "an economic downturn causes the price level to fall and thus causing a deterioration in firms’ net worth because of the increased burden of indebtedness."
            },
            {
              "l": "b",
              "t": "rising interest rates worsen adverse selection and moral-hazard problems."
            },
            {
              "l": "c",
              "t": "lenders reduce their lending due to declining stock prices (equity deflation) that lowers the value of collateral."
            },
            {
              "l": "d",
              "t": "corporations pay back their loans before the scheduled maturity date in order to reduce their debts."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Debt deflation: a falling price level raises the real burden of nominal debt while asset values do not rise, so firms' real net worth falls. Lending falls and activity contracts further.",
          "source": "Lecture 6, 'Dynamics of crises in advanced economies' (stage three)",
          "origin": "Old-exam pool #58"
        },
        {
          "num": 61,
          "qid": "P-61",
          "stem": "We know that the banking sector holds required reserves of €20 million, that the deposits on the liabilities side of the balance sheet of the banking sector amount to €200 million and that the banking sector holds €20 million in government bonds. Assume that the central bank buys government bonds for a total of €3 million from the banking sector. What will be the change in deposits that is caused by these purchases of government bonds within the simple deposit creation model (“the simple model”)?",
          "options": [
            {
              "l": "a",
              "t": "Deposits decrease by €3 million."
            },
            {
              "l": "b",
              "t": "Deposits increase by €3 million."
            },
            {
              "l": "c",
              "t": "Deposits increase by €30 million but only if e is at 0.1 and c is at 0.2."
            },
            {
              "l": "d",
              "t": "Deposits increase by €30 million."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Simple model: r = RR/D = 20/200 = 0.10, so the deposit multiplier is 10. A €3 million purchase adds €3 million in reserves, so ΔD = 3 / 0.10 = €30 million. Option (c) is wrong because e and c play no role in the simple model.",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Old-exam pool #61"
        },
        {
          "num": 62,
          "qid": "P-62",
          "stem": "A wave of recent bank robberies in country ABC has terrified deposit holders. In fact, deposit holders decide to hold more cash. Assume that the banks in country ABC use part of their reserves for giving loans. Everything else held constant (i.e., ceteris paribus), this decision of deposit holders to hold more cash",
          "options": [
            {
              "l": "a",
              "t": "decreases M1 but not M2."
            },
            {
              "l": "b",
              "t": "decreases the amount of high-powered money."
            },
            {
              "l": "c",
              "t": "decreases M1."
            },
            {
              "l": "d",
              "t": "decreases the simple deposit multiplier."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Holding more cash raises c, which lowers the money multiplier and therefore M1. The monetary base only changes composition, and the simple deposit multiplier 1/r is unaffected. M2 falls too, so (a) is wrong.",
          "source": "Lecture 9, factors affecting M1",
          "origin": "Old-exam pool #62"
        },
        {
          "num": 63,
          "qid": "P-63",
          "stem": "The time-inconsistency problem in monetary policy tells us that if policymakers use discretionary policy, there is a ________ probability that ________ will be higher when compared with policy makers that follow a behaviour rule.",
          "options": [
            {
              "l": "a",
              "t": "higher; the inflation rate"
            },
            {
              "l": "b",
              "t": "lower; the inflation rate"
            },
            {
              "l": "c",
              "t": "higher; the maturity mismatch"
            },
            {
              "l": "d",
              "t": "lower; asymmetric information"
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "With discretion, agents expect short-run stimulus, raise their inflation expectations, and inflation ends up higher without extra growth. A credible behaviour rule (nominal anchor) prevents this.",
          "source": "Lecture 8, time-inconsistency problem; Lecture 10, 'Behaviour rule and nominal anchor'",
          "origin": "Old-exam pool #63"
        },
        {
          "num": 64,
          "qid": "P-64",
          "stem": "In the United States, open-market-operations are executed by",
          "options": [
            {
              "l": "a",
              "t": "The United States Treasury."
            },
            {
              "l": "b",
              "t": "The central banks of each of the individual 50 states of the United States."
            },
            {
              "l": "c",
              "t": "The Federal Reserve Bank of New York."
            },
            {
              "l": "d",
              "t": "The Governing Council."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The FOMC decides, and the trading desk of the Federal Reserve Bank of New York carries out the OMOs centrally.",
          "source": "Lecture 8, 'Federal Open Market Committee'",
          "origin": "Old-exam pool #64"
        },
        {
          "num": 65,
          "qid": "P-65",
          "stem": "Since the start of the Single Supervisory Mechanism (SSM), the ECB supervises",
          "options": [
            {
              "l": "a",
              "t": "all significant banks in Europe."
            },
            {
              "l": "b",
              "t": "all significant financial intermediaries in the euro area."
            },
            {
              "l": "c",
              "t": "all banks in the euro area."
            },
            {
              "l": "d",
              "t": "all significant banks in the euro area."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Under the SSM the ECB directly supervises all 'significant' banks in the euro area (100+ banks, more than 80 % of assets). Smaller banks stay with national supervisors.",
          "source": "Lecture 8, 'Single Supervisory Mechanism (SSM, 2014)'",
          "origin": "Old-exam pool #65"
        },
        {
          "num": 66,
          "qid": "P-66",
          "stem": "You have to examine the validity of the following statements on independence of central banks.\nA. Instrument independence refers to the ability of the central bank to set the goals of monetary policy.\nB. Goal independence refers to the ability of the central bank to set the instruments of monetary policy.\nC. Financial independence refers to the ability of the central bank to give credits to political authorities whilst not allowing it to receive credits from political authorities.\nD. Political independence refers to the ability of the central bank to design monetary policy without taking instructions from political authorities.\n\nHow many of the above four statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "0 of the above four statements are correct."
            },
            {
              "l": "b",
              "t": "1 of the above four statements is correct."
            },
            {
              "l": "c",
              "t": "2 of the above four statements are correct."
            },
            {
              "l": "d",
              "t": "3 of the above four statements are correct."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "A and B swap the definitions, and C is wrong because financial independence means setting its own budget. D is correct: political independence means not taking instructions from political authorities on monetary policy. One statement is correct.",
          "source": "Lecture 8, 'Central bank independence'",
          "origin": "Old-exam pool #66"
        },
        {
          "num": 67,
          "qid": "P-67",
          "stem": "In the so-called market for reserves, we see the interplay of the demand for and the supply of reserves. You have to analyse the validity of the following statements.\nA. The supply curve of reserves is completely vertical since the central bank autonomously decides about the quantity of reserves.\nB. The overnight interbank interest rate cannot equal the lending rate without leading to arbitrage operations by the banking sector.\nC. The demand for reserves initially is downward-sloping but becomes upward-sloping for a large enough quantity of reserves.\nD. OMOs increase the borrowed reserves.\n\nHow many of the above statements are not correct?",
          "options": [
            {
              "l": "a",
              "t": "one of the above statements is not correct."
            },
            {
              "l": "b",
              "t": "two of the above statements are not correct."
            },
            {
              "l": "c",
              "t": "three of the above statements are not correct."
            },
            {
              "l": "d",
              "t": "four of the above statements are not correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "A: supply is horizontal at the lending rate, not completely vertical. B: i can equal il; arbitrage needs i > il. C: demand becomes flat at the deposit rate, not upward-sloping. D: OMOs change non-borrowed reserves. All four are wrong.",
          "source": "Lecture 10, market for reserves",
          "origin": "Old-exam pool #67"
        },
        {
          "num": 68,
          "qid": "P-68",
          "stem": "Central banks currently argue that either a dual or hierarchical mandate is acceptable as long as ________ is the primary goal in the ________.",
          "options": [
            {
              "l": "a",
              "t": "interest rate stability; short run."
            },
            {
              "l": "b",
              "t": "price stability; long run."
            },
            {
              "l": "c",
              "t": "reducing business-cycle fluctuations; short run."
            },
            {
              "l": "d",
              "t": "maximising output; long run."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "A dual mandate (Fed) or a hierarchical mandate (ECB) is acceptable as long as price stability is the primary goal in the long run. There is no long-run trade-off between price stability and the other goals.",
          "source": "Lecture 8 (price stability as primary goal); Lecture 10 (dual vs hierarchical mandate)",
          "origin": "Old-exam pool #68"
        },
        {
          "num": 69,
          "qid": "P-69",
          "stem": "The Transmission Protection Instrument (TPI)",
          "options": [
            {
              "l": "a",
              "t": "would allow the ECB in exceptional times to buy government bonds in the primary market."
            },
            {
              "l": "b",
              "t": "intends to increase yields of government bonds in order to increase the revenues of commercial banks."
            },
            {
              "l": "c",
              "t": "would imply an increase in reserves in contrast to QE where reserves decrease."
            },
            {
              "l": "d",
              "t": "does not have the same effects on reserves when compared with QE."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "TPI purchases are sterilised, so unlike QE they do not raise reserves. (a) Only secondary-market purchases are allowed; (b) the aim is to counter unwarranted rises in yields; (c) QE increases reserves, it does not lower them.",
          "source": "Lecture 10, 'Transmission Protection Instrument (TPI, 2022-)'",
          "origin": "Old-exam pool #69"
        },
        {
          "num": 198,
          "qid": "P-198",
          "stem": "Which of the following actions of the central bank would be supported by the Taylor rule?",
          "options": [
            {
              "l": "a",
              "t": "When real GDP is below its potential level, the central bank should increase the interest rate."
            },
            {
              "l": "b",
              "t": "When real GDP is below its potential level, the central bank should increase its lending rate."
            },
            {
              "l": "c",
              "t": "When real GDP is below its potential level, the central bank should decrease the deposit rate if the interbank overnight interest rate is below the deposit rate."
            },
            {
              "l": "d",
              "t": "None of the answers 1, 2 and 3 is correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "'Answers 1, 2 and 3' refers to options a, b and c.",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "If real GDP is below potential (negative output gap), the Taylor rule calls for a lower interest rate, so (a) and (b) are wrong. (c) is nonsense, because the overnight rate cannot be below the deposit rate.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Old-exam pool #198"
        },
        {
          "num": 199,
          "qid": "P-199",
          "stem": "The Fed and the ECB use three conventional policy tools to manipulate the money supply: open market operations, which primarily affect the ________; changes in borrowed reserves, which primarily affect the ________; and changes in reserve requirements, which primarily affect the ________.",
          "options": [
            {
              "l": "a",
              "t": "money multiplier; monetary base; monetary base"
            },
            {
              "l": "b",
              "t": "monetary base; money multiplier; monetary base"
            },
            {
              "l": "c",
              "t": "money multiplier; money multiplier; monetary base"
            },
            {
              "l": "d",
              "t": "None of the answers 1, 2 and 3 is correct"
            }
          ],
          "correct": [
            "d"
          ],
          "note": "'Answers 1, 2 and 3' refers to options a, b and c.",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "OMOs change the (non-borrowed) monetary base. Lending to banks changes borrowed reserves and so also the monetary base. Reserve requirements change the money multiplier. The right pattern is 'monetary base; monetary base; money multiplier', which is not among (a)–(c).",
          "source": "Lecture 9 (control of the monetary base); Lecture 10 (tools)",
          "origin": "Old-exam pool #199"
        },
        {
          "num": 201,
          "qid": "P-201",
          "stem": "Everything else held constant, when the EONIA is ________ the ECB’s deposit rate, the demand for reserves rises when the EONIA ________.",
          "options": [
            {
              "l": "a",
              "t": "below; rises."
            },
            {
              "l": "b",
              "t": "below; falls."
            },
            {
              "l": "c",
              "t": "above; rises."
            },
            {
              "l": "d",
              "t": "above; falls."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "EONIA was the euro overnight rate before it was replaced by €STR (2022). The question is in its original wording.",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "Above the deposit rate the demand curve for reserves slopes downward: a lower overnight rate means a lower opportunity cost of holding excess reserves, so banks demand more reserves. At the deposit rate the curve becomes flat.",
          "source": "Lecture 10, 'Demand for reserves'",
          "origin": "Old-exam pool #201"
        },
        {
          "num": 203,
          "qid": "P-203",
          "stem": "Using Taylor’s rule, when the equilibrium real interest rate is 2 percent, real GDP is at 3 percent below the potential output level, the target inflation rate is 2 percent, and the actual inflation rate is 3 percent, the nominal interest rate target set by the central bank should be",
          "options": [
            {
              "l": "a",
              "t": "7 percent."
            },
            {
              "l": "b",
              "t": "6 percent."
            },
            {
              "l": "c",
              "t": "4 percent."
            },
            {
              "l": "d",
              "t": "None of the answers 1, 2 and 3 is correct."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "The output gap is −3 %. i = 3 + 2 + 0.5 × (3 − 2) + 0.5 × (−3) = 4 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Old-exam pool #203"
        },
        {
          "num": 204,
          "qid": "P-204",
          "stem": "Debt deflation is defined as a situation in which",
          "options": [
            {
              "l": "a",
              "t": "an economic downturn causes the price level to fall, which in turn leads to an improvement in the firms’ net worth since the loans that are to be repaid decrease in value."
            },
            {
              "l": "b",
              "t": "decreasing credit risk worsens adverse selection and moral hazard problems."
            },
            {
              "l": "c",
              "t": "a substantial unanticipated decline in the price level takes place that further decreases the firms’ net worth because of the increased burden of indebtedness."
            },
            {
              "l": "d",
              "t": "central bank policy aims at negative nominal interest rates in order to encourage economic activity."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Debt deflation is an unanticipated fall in the price level that raises the real value of debt and lowers firms' real net worth. (a) gets the net-worth effect backwards.",
          "source": "Lecture 6, debt deflation (stage three)",
          "origin": "Old-exam pool #204"
        },
        {
          "num": 205,
          "qid": "P-205",
          "stem": "The growth of the subprime mortgage market was accompanied by",
          "options": [
            {
              "l": "a",
              "t": "a decline in the housing industry because of the higher default risk of such subprime mortgages."
            },
            {
              "l": "b",
              "t": "a decrease in home ownership as investors chose other assets over houses due to the higher riskiness of subprime mortgages."
            },
            {
              "l": "c",
              "t": "increased demand for houses."
            },
            {
              "l": "d",
              "t": "increased demand for mortgages that arose within the shift from the originate-and-distribute to the originate-and-hold model."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Subprime lending let many more households get mortgages, which raised the demand for houses and fed the house price bubble. The shift ran from originate-and-hold to originate-to-distribute, not the other way round.",
          "source": "Lecture 7",
          "origin": "Old-exam pool #205"
        },
        {
          "num": 207,
          "qid": "P-207",
          "stem": "In the second figure on the transactions within the securitisation process that we examined in the lectures and tutorials, several transactions took place between the bank, the Structured Investment Vehicle (SIV), the Special Purpose Vehicle (SPV) and the investors. Which of the following transactions was amongst those that were examined in the figure in question?",
          "options": [
            {
              "l": "a",
              "t": "The bank sells a subprime mortgage to the investor."
            },
            {
              "l": "b",
              "t": "The bank sells Asset Backed Securities (ABSs) to the investor."
            },
            {
              "l": "c",
              "t": "The SPV sells Asset Backed Securities (ABSs) to the investor."
            },
            {
              "l": "d",
              "t": "The SIV sells Asset Backed Commercial Papers (ABCPs) to the investor."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "In the second figure, the bank sells the portfolio to the SPV, the SPV sells ABS to the SIV, and the SIV sells ABCP to investors (backed by the bank's credit line). The ABS do not go directly to investors in that figure.",
          "source": "Lecture 7, 'Securitisation process' (second figure)",
          "origin": "Old-exam pool #207"
        },
        {
          "num": 209,
          "qid": "P-209",
          "stem": "In his article on Over the Cliff: From the Subprime to the Global Financial Crisis, Frederic S. Mishkin indicates that shortly after the bankruptcy of Lehman Brothers in September 2008, also the insurer American International Group (AIG) was seen as a financial company with extremely high risk which then caused other financial companies to quickly reduce their lending to AIG. Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "AIG was the largest stockholder of Lehman Brothers and the losses on its position in Lehman Brothers led markets to doubt the creditworthiness of AIG."
            },
            {
              "l": "b",
              "t": "The increase in value of the Collaterized Debt Securities on the asset side of AIG’s balance sheet reduced its net worth."
            },
            {
              "l": "c",
              "t": "AIG offered insurance against decreases in the value of Asset Backed Securities by selling so-called Credit Default Swaps."
            },
            {
              "l": "d",
              "t": "AIG offered insurance against decreases in the value of Asset Backed Securities by buying so-called Credit Default Swaps of which the value decreased substantially."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "AIG had sold large amounts of credit default swaps, i.e. insurance against losses on asset-backed securities. When those securities lost value, AIG faced huge payouts.",
          "source": "Mishkin (2011), 'Over the Cliff'; Lecture 7 (CDS)",
          "origin": "Old-exam pool #209"
        },
        {
          "num": 210,
          "qid": "P-210",
          "stem": "Which of the following is not an advantage of low and stable positive rates of inflation?",
          "options": [
            {
              "l": "a",
              "t": "Improving transparency of relative prices."
            },
            {
              "l": "b",
              "t": "Reducing distortions of tax and social security systems."
            },
            {
              "l": "c",
              "t": "Increasing the redistribution of wealth between lenders and borrowers."
            },
            {
              "l": "d",
              "t": "Reducing inflation risk premia in interest rates."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability prevents arbitrary redistribution between lenders and borrowers. The other three are listed benefits.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Old-exam pool #210"
        },
        {
          "num": 211,
          "qid": "P-211",
          "stem": "Central banks can have different goals. Which one of the goals below figures amongst the goals of central banks as discussed in the book of Mishkin, Matthews and Giuliodori?",
          "options": [
            {
              "l": "a",
              "t": "Unemployment below the natural rate of unemployment"
            },
            {
              "l": "b",
              "t": "Zero inflation"
            },
            {
              "l": "c",
              "t": "Stability of financial markets"
            },
            {
              "l": "d",
              "t": "Exchange-rate stability as in the case of the European Central Bank"
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Stability of financial markets is one of the goals Mishkin lists. The employment goal is unemployment at the natural rate (not below it), price stability means low, not zero, inflation, and the ECB has no exchange-rate goal.",
          "source": "Lecture 8, 'Other (potential) goals of monetary policy'",
          "origin": "Old-exam pool #211"
        },
        {
          "num": 212,
          "qid": "P-212",
          "stem": "Regarding central bank independence,",
          "options": [
            {
              "l": "a",
              "t": "the Fed is more independent than the European Central Bank."
            },
            {
              "l": "b",
              "t": "the European Central Bank is more independent than the Fed."
            },
            {
              "l": "c",
              "t": "the trend in industrialized nations has been to reduce central bank independence."
            },
            {
              "l": "d",
              "t": "the Bank of England has the longest tradition of independence of any central bank in the world."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ECB is the most independent central bank in the world (instrument and goal independent, with treaty protection). The trend has been towards more independence, and the Bank of England is less independent than the Fed and the ECB.",
          "source": "Lecture 8, 'How independent is the ECB?'",
          "origin": "Old-exam pool #212"
        },
        {
          "num": 213,
          "qid": "P-213",
          "stem": "High-powered money minus reserves equals",
          "options": [
            {
              "l": "a",
              "t": "deposits."
            },
            {
              "l": "b",
              "t": "currency in circulation."
            },
            {
              "l": "c",
              "t": "the monetary base."
            },
            {
              "l": "d",
              "t": "the non-borrowed base."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "MB = C + R, so MB − R = C, currency in circulation.",
          "source": "Lecture 9, the central bank's balance sheet",
          "origin": "Old-exam pool #213"
        },
        {
          "num": 214,
          "qid": "P-214",
          "stem": "We know that the banking sector in country X holds required reserves of €25 billion, €500 billions of loans and €55 billion of government bonds. The total amount of deposits of the banking sector amounts to €500 billion and bank capital is at €80 billion. Assume that the central bank of country X buys government bonds for a total of €10 million from the banking sector. What will be the change in the deposits that is created by the latter operation according to the simple deposit creation model (“the simple model”)?",
          "options": [
            {
              "l": "a",
              "t": "Deposits decrease by €100 million."
            },
            {
              "l": "b",
              "t": "Deposits increase by €100 million."
            },
            {
              "l": "c",
              "t": "Deposits increase by €160 million."
            },
            {
              "l": "d",
              "t": "The correct amount is not specified in the answers 1, 2 and 3."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "'Answers 1, 2 and 3' refers to options a, b and c.",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Simple model: r = 25/500 = 5 %, so the deposit multiplier is 20. A purchase of €10 million adds €10 million in reserves, so ΔD = 10 × 20 = €200 million. That is not among (a)–(c).",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Old-exam pool #214"
        },
        {
          "num": 244,
          "qid": "P-244",
          "stem": "Open Market Operations (OMOs) have several advantages. However, one of the below statements does certainly not contain an advantage of OMOs.",
          "options": [
            {
              "l": "a",
              "t": "OMOs are precise."
            },
            {
              "l": "b",
              "t": "OMOs are certain to increase the non-borrowed reserves."
            },
            {
              "l": "c",
              "t": "OMOs are easily reversed."
            },
            {
              "l": "d",
              "t": "OMOs are quickly implemented."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The advantages of OMOs are that the central bank has full control over them, they are flexible and precise, easily reversed and quickly implemented. (b) is not an advantage and not even true: open market sales reduce non-borrowed reserves, and a purchase from a non-bank that keeps the cash raises currency rather than reserves.",
          "source": "Lecture 10, 'Open market operations'; Lecture 9",
          "origin": "Old-exam pool #244"
        },
        {
          "num": 245,
          "qid": "P-245",
          "stem": "We know that the banking sector holds required reserves of €10 million. You also know that the deposits that are on the liabilities side of the banking sector are at €200 million. Assume that the central bank sells government bonds for a total of €1,000 to the banking sector. What will be the ultimate change in the amount of deposits that is caused by the latter operation according to the simple deposit creation model (“the simple model”)?",
          "options": [
            {
              "l": "a",
              "t": "Deposits decrease by €10,000."
            },
            {
              "l": "b",
              "t": "Deposits increase by €10,000."
            },
            {
              "l": "c",
              "t": "Deposits decrease by €20,000."
            },
            {
              "l": "d",
              "t": "Deposits increase by €20,000."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "r = 10/200 = 5 %, so the deposit multiplier is 20. A sale of €1,000 removes €1,000 of reserves, so ΔD = −1,000 × 20 = −€20,000.",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Old-exam pool #245"
        },
        {
          "num": 246,
          "qid": "P-246",
          "stem": "Suppose that MB = 500, e = 0.1, c = 0.2 and r = 0.1. This economy then has a money supply M2 that is equal to",
          "options": [
            {
              "l": "a",
              "t": "550."
            },
            {
              "l": "b",
              "t": "1,500."
            },
            {
              "l": "c",
              "t": "5,000."
            },
            {
              "l": "d",
              "t": "an amount that we cannot calculate on the basis of the above information."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "MB, r, e and c give M1 = (1.2/0.4) × 500 = 1,500, but M2 also needs the time and savings deposit ratio, which is not given.",
          "source": "Lecture 9 / Lecture 12 (M2 multiplier)",
          "origin": "Old-exam pool #246"
        },
        {
          "num": 247,
          "qid": "P-247",
          "stem": "Central banks desire to be closely informed about the number of Automated Teller Machines (ATM), i.e. cash dispensers or cash machines. In fact, a larger number of ATM (everything else held constant, i.e. ceteris paribus) immediately increases",
          "options": [
            {
              "l": "a",
              "t": "the inverse of the deposit multiplier."
            },
            {
              "l": "b",
              "t": "excess reserves."
            },
            {
              "l": "c",
              "t": "the currency ratio."
            },
            {
              "l": "d",
              "t": "the inverse of the currency ratio."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "With more cash machines, people can get cash whenever they need it, so they hold less currency relative to deposits. The currency ratio c falls, so its inverse 1/c rises.",
          "source": "Lecture 9, currency ratio; Mishkin ch. 15",
          "origin": "Old-exam pool #247"
        },
        {
          "num": 248,
          "qid": "P-248",
          "stem": "Which of the following statements about the benefits of price stability is not correct?",
          "options": [
            {
              "l": "a",
              "t": "Price stability reduces distortions of tax and social security systems."
            },
            {
              "l": "b",
              "t": "Price stability prevents arbitrary redistribution of wealth."
            },
            {
              "l": "c",
              "t": "Price stability stimulates hedging activities."
            },
            {
              "l": "d",
              "t": "Price stability increases benefits of holding cash."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability avoids unnecessary hedging; it does not stimulate it. The other three are listed benefits.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Old-exam pool #248"
        },
        {
          "num": 250,
          "qid": "P-250",
          "stem": "If debt contracts of firms in the domestic economy are partly denominated in foreign currency, then an unanticipated decline in the value of the domestic currency (i.e. a depreciation of the domestic currency) results in",
          "options": [
            {
              "l": "a",
              "t": "a decline in the net worth of firms in the domestic economy."
            },
            {
              "l": "b",
              "t": "an increase in the net worth of firms in the domestic economy."
            },
            {
              "l": "c",
              "t": "a decrease in adverse selection and moral hazard."
            },
            {
              "l": "d",
              "t": "an increase in domestic banks’ willingness to lend to firms in the domestic economy."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "With foreign-currency debt, a depreciation raises the domestic-currency value of liabilities, so firms' net worth falls. This worsens adverse selection and moral hazard and reduces banks' willingness to lend.",
          "source": "Lecture 6, 'Unanticipated decline in the value of the domestic currency'",
          "origin": "Old-exam pool #250"
        },
        {
          "num": 251,
          "qid": "P-251",
          "stem": "Which of the following problems was not mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "The lowering of the policy interest rates by the Federal Reserve after the bursting of the internet bubble."
            },
            {
              "l": "b",
              "t": "The competitive depreciations in which the currencies of the crisis countries engaged in 1997."
            },
            {
              "l": "c",
              "t": "The fact that the basket peg of the crisis countries ensured that the exchange rate of these countries remained constant towards the US dollar prior to the outbreak of the crisis of 1997-1998."
            },
            {
              "l": "d",
              "t": "The fact that the liberalisation of the capital account prior to the crisis increased capital inflows into the crisis countries."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The Fed's rate cuts after the internet bubble belong to the run-up to the 2007–08 crisis, not the East-Asian crisis. Competitive depreciations, the peg to the dollar and capital-account liberalisation are all in the East-Asia discussion.",
          "source": "Lecture 6, East-Asian crisis; Lecture 7",
          "origin": "Old-exam pool #251"
        },
        {
          "num": 252,
          "qid": "P-252",
          "stem": "The statement “Banks have strong incentives to carefully select and monitor their customers in order to minimise credit risk” refers to which model?",
          "options": [
            {
              "l": "a",
              "t": "The originate-to-lend model."
            },
            {
              "l": "b",
              "t": "The originate-to-distribute model."
            },
            {
              "l": "c",
              "t": "The originate-and-hold model."
            },
            {
              "l": "d",
              "t": "The too-important-to-fail model."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "In 'originate and hold' the bank keeps the loan on its balance sheet until maturity and bears the credit risk. So it has strong incentives to screen and monitor borrowers carefully.",
          "source": "Lecture 7, 'Originate and hold model'",
          "origin": "Old-exam pool #252"
        },
        {
          "num": 253,
          "qid": "P-253",
          "stem": "The following disadvantage is not listed amongst the main disadvantages/dangers of regulation of financial intermediaries:",
          "options": [
            {
              "l": "a",
              "t": "moral hazard."
            },
            {
              "l": "b",
              "t": "high cost of compliance."
            },
            {
              "l": "c",
              "t": "adverse selection."
            },
            {
              "l": "d",
              "t": "regulatory capture."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The lecture lists three dangers of regulation: moral hazard (safety nets), costs of compliance, and regulatory capture. Adverse selection is a problem that regulation tries to reduce, not a danger it creates.",
          "source": "Lecture 11, 'Main disadvantages/dangers of regulation'",
          "origin": "Old-exam pool #253"
        }
      ]
    }
  ],
  "topics": [
    {
      "id": "t_l6",
      "label": "L6 – Financial Crises",
      "source": "Old final exams + question pool, no duplicates",
      "questions": [
        {
          "num": "RQ-1",
          "qid": "RQ-1",
          "stem": "Mishkin discusses various factors that cause financial crises. Amongst these causes, the authors argue that the deterioration in the balance sheets of financial institutions leads to a contraction of capital and subsequent deleveraging. This means that",
          "options": [
            {
              "l": "a",
              "t": "banks have difficulties to obtain reserves and as such have to reduce lending to corporations."
            },
            {
              "l": "b",
              "t": "banks are confronted with a reduction in net worth and subsequently need to reduce lending to corporations."
            },
            {
              "l": "c",
              "t": "banks are confronted with an increase in the capital requirements of the Basel agreements through which they have to reduce lending to corporations."
            },
            {
              "l": "d",
              "t": "banks are confronted with large deposit withdrawals that reduce their capital and subsequently reduce their ability to lend to corporations."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Deleveraging is about capital, not liquidity: loan losses and asset write-downs eat into bank capital (net worth), and with less capital a bank has to shrink its assets, so it cuts lending. Option (a) is a reserves problem, (c) is not the mechanism, and (d) mixes up deposit outflows (liquidity) with capital losses.",
          "source": "Lecture 6, 'Deterioration in financial institutions' balance sheets'; Mishkin ch. 12",
          "origin": "Representative questions Q1 · also in: Old-exam pool #125"
        },
        {
          "num": "F25-8",
          "qid": "F25-8",
          "stem": "In his analysis of the causes of financial crises, Mishkin also discusses the deterioration of the balance sheets of financial institutions. In particular, he mentions that such deterioration of the balance sheets of financial institutions implies a contraction of capital and subsequent deleveraging. The latter means that",
          "options": [
            {
              "l": "a",
              "t": "large withdrawals of deposits force financial institutions to reduce lending."
            },
            {
              "l": "b",
              "t": "large withdrawals of deposits force financial institutions to issue more bank stocks."
            },
            {
              "l": "c",
              "t": "value losses in their assets force financial institutions to issue more bank stocks in order to keep the ratio of capital to risk-weighted liabilities above 8 percent."
            },
            {
              "l": "d",
              "t": "value losses in their assets force financial institutions to reduce lending."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Deleveraging: value losses on assets (non-performing loans, falling collateral) reduce bank capital, so banks shrink their balance sheets by cutting lending. Deposit withdrawals are a liquidity problem, and issuing new shares is the opposite of deleveraging.",
          "source": "Lecture 6, 'Deterioration in financial institutions' balance sheets'",
          "origin": "Final exam Oct 2025 Q8 · also in: Exam Jan 2023 Q14, Old-exam pool #150"
        },
        {
          "num": "F25-9",
          "qid": "F25-9",
          "stem": "Which of the following problems was mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "The sharp depreciation of the value of the legal tender of the crisis countries increased the value of the bank assets that were denominated in the legal tender of the crisis countries."
            },
            {
              "l": "b",
              "t": "The currency mismatch on the balance sheets of many banks and firms in the crisis countries generated massive increases (appreciations) in the value of the currencies of the crisis countries."
            },
            {
              "l": "c",
              "t": "The strong increase in bank lending in the crisis countries that preceded the crisis of 1997-1998 made that increasingly projects of superior quality were financed."
            },
            {
              "l": "d",
              "t": "Contagion during the East-Asian crisis meant that tensions spread quickly from Thailand to the other crisis countries."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "After the baht was floated on 2 July 1997, the turmoil spread within weeks to the other crisis countries (contagion, competitive depreciations). (a) The depreciation raised the value of foreign-currency liabilities, not domestic-currency assets; (b) the currency mismatch made a depreciation, not an appreciation, dangerous; (c) the lending boom financed worse and worse projects.",
          "source": "Lecture 6, 'The East-Asian crisis: the ultimate trigger'",
          "origin": "Final exam Oct 2025 Q9 · also in: Old-exam pool #151"
        },
        {
          "num": "R21-11",
          "qid": "R21-11",
          "stem": "Which of the following problems was mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "Banks in the crisis countries lent heavily in US dollars to banks in the US, Europe and Japan and this created a maturity mismatch on their balance sheets."
            },
            {
              "l": "b",
              "t": "The currency mismatch and the decrease in the value of the US dollar meant that the domestic-currency value of the debt that was denominated in foreign currency increasingly eroded bank capital."
            },
            {
              "l": "c",
              "t": "The sharp increase in the value (appreciation) of the South-Korean won during the East-Asian crisis of 1997-1998 increased the value in won of bank debt that was denominated in US dollar."
            },
            {
              "l": "d",
              "t": "The sharp depreciation of the currencies of the crisis countries increased the value of the bank liabilities."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The sharp depreciations raised the domestic-currency value of the banks' dollar-denominated debt (currency mismatch), so their liabilities rose and net worth fell. (a) Banks borrowed abroad, they did not lend; (b) the dollar rose, it did not fall; (c) the won ultimately plunged.",
          "source": "Lecture 6, East-Asian crisis",
          "origin": "Resit exam 2021 Q11 · also in: Old-exam pool #14"
        },
        {
          "num": "F20-5",
          "qid": "F20-5",
          "stem": "In their analysis of the causes of financial crises, the lectures mentioned the effects of an unanticipated decline in the value of the domestic currency. Such unanticipated decline in the value of the domestic currency worsens balance sheets through the",
          "options": [
            {
              "l": "a",
              "t": "decrease in the domestic-currency value of assets that are denominated in the foreign currency which then decreases net worth."
            },
            {
              "l": "b",
              "t": "increase in the domestic-currency value of assets that are denominated in the foreign currency which then decreases net worth."
            },
            {
              "l": "c",
              "t": "increase in the domestic-currency value of debts that are denominated in the foreign currency which then decreases net worth."
            },
            {
              "l": "d",
              "t": "decrease in the domestic-currency value of debts that are denominated in the foreign currency which then decreases net worth."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Currency mismatch: when the domestic currency loses value unexpectedly, debt denominated in foreign currency becomes worth more in domestic currency. Liabilities rise and net worth falls.",
          "source": "Lecture 6, 'Unanticipated decline in the value of the domestic currency'",
          "origin": "Final exam 2020 Q5"
        },
        {
          "num": "F20-6",
          "qid": "F20-6",
          "stem": "Which of the following problems was mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "The fact that the liberalisation of the capital account prior to the crisis restricted capital inflows into the crisis countries."
            },
            {
              "l": "b",
              "t": "The fact that the inflation rates in the crisis countries prior to the crisis were below the inflation rate of the United States such that deflation risks in the US caused hefty capital inflows into the crisis countries."
            },
            {
              "l": "c",
              "t": "The balance sheets of firms and banks worsened due to the maturity mismatch that created the fear that appreciations of the currencies of the crisis countries would massively increase the domestic-currency value of debt that was denominated in foreign currency."
            },
            {
              "l": "d",
              "t": "The fact that the basket peg of the crisis countries ensured that the exchange rate of these countries remained constant against the US dollar prior to the outbreak of the crisis."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Before the crisis the five countries kept a virtually fixed exchange rate against the US dollar. (a) Capital-account liberalisation increased capital inflows; (b) inflation was higher than in the US; (c) the feared move was a depreciation, not an appreciation.",
          "source": "Lecture 6, 'The East-Asian crisis: major developments before the crisis'",
          "origin": "Final exam 2020 Q6 · also in: Old-exam pool #59"
        },
        {
          "num": "P-58",
          "qid": "P-58",
          "stem": "Debt deflation is defined as a situation in which",
          "options": [
            {
              "l": "a",
              "t": "an economic downturn causes the price level to fall and thus causing a deterioration in firms’ net worth because of the increased burden of indebtedness."
            },
            {
              "l": "b",
              "t": "rising interest rates worsen adverse selection and moral-hazard problems."
            },
            {
              "l": "c",
              "t": "lenders reduce their lending due to declining stock prices (equity deflation) that lowers the value of collateral."
            },
            {
              "l": "d",
              "t": "corporations pay back their loans before the scheduled maturity date in order to reduce their debts."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Debt deflation: a falling price level raises the real burden of nominal debt while asset values do not rise, so firms' real net worth falls. Lending falls and activity contracts further.",
          "source": "Lecture 6, 'Dynamics of crises in advanced economies' (stage three)",
          "origin": "Old-exam pool #58"
        },
        {
          "num": "P-204",
          "qid": "P-204",
          "stem": "Debt deflation is defined as a situation in which",
          "options": [
            {
              "l": "a",
              "t": "an economic downturn causes the price level to fall, which in turn leads to an improvement in the firms’ net worth since the loans that are to be repaid decrease in value."
            },
            {
              "l": "b",
              "t": "decreasing credit risk worsens adverse selection and moral hazard problems."
            },
            {
              "l": "c",
              "t": "a substantial unanticipated decline in the price level takes place that further decreases the firms’ net worth because of the increased burden of indebtedness."
            },
            {
              "l": "d",
              "t": "central bank policy aims at negative nominal interest rates in order to encourage economic activity."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Debt deflation is an unanticipated fall in the price level that raises the real value of debt and lowers firms' real net worth. (a) gets the net-worth effect backwards.",
          "source": "Lecture 6, debt deflation (stage three)",
          "origin": "Old-exam pool #204"
        },
        {
          "num": "P-250",
          "qid": "P-250",
          "stem": "If debt contracts of firms in the domestic economy are partly denominated in foreign currency, then an unanticipated decline in the value of the domestic currency (i.e. a depreciation of the domestic currency) results in",
          "options": [
            {
              "l": "a",
              "t": "a decline in the net worth of firms in the domestic economy."
            },
            {
              "l": "b",
              "t": "an increase in the net worth of firms in the domestic economy."
            },
            {
              "l": "c",
              "t": "a decrease in adverse selection and moral hazard."
            },
            {
              "l": "d",
              "t": "an increase in domestic banks’ willingness to lend to firms in the domestic economy."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "With foreign-currency debt, a depreciation raises the domestic-currency value of liabilities, so firms' net worth falls. This worsens adverse selection and moral hazard and reduces banks' willingness to lend.",
          "source": "Lecture 6, 'Unanticipated decline in the value of the domestic currency'",
          "origin": "Old-exam pool #250"
        },
        {
          "num": "P-251",
          "qid": "P-251",
          "stem": "Which of the following problems was not mentioned in the discussion of the East-Asian crisis of 1997-1998?",
          "options": [
            {
              "l": "a",
              "t": "The lowering of the policy interest rates by the Federal Reserve after the bursting of the internet bubble."
            },
            {
              "l": "b",
              "t": "The competitive depreciations in which the currencies of the crisis countries engaged in 1997."
            },
            {
              "l": "c",
              "t": "The fact that the basket peg of the crisis countries ensured that the exchange rate of these countries remained constant towards the US dollar prior to the outbreak of the crisis of 1997-1998."
            },
            {
              "l": "d",
              "t": "The fact that the liberalisation of the capital account prior to the crisis increased capital inflows into the crisis countries."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l6",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The Fed's rate cuts after the internet bubble belong to the run-up to the 2007–08 crisis, not the East-Asian crisis. Competitive depreciations, the peg to the dollar and capital-account liberalisation are all in the East-Asia discussion.",
          "source": "Lecture 6, East-Asian crisis; Lecture 7",
          "origin": "Old-exam pool #251"
        }
      ]
    },
    {
      "id": "t_l7",
      "label": "L7 – Subprime Crisis 2007–08",
      "source": "Old final exams + question pool, no duplicates",
      "questions": [
        {
          "num": "RQ-2",
          "qid": "RQ-2",
          "stem": "Mortgage A has a probability of not going into default of 80 percent, whereas mortgage B has a probability of default of 20 percent. Assume that the size of mortgage A is three times as large as the size of mortgage B and that the defaults of the two mortgages are perfectly correlated. The average probability of default of the portfolio of these two mortgages then",
          "options": [
            {
              "l": "a",
              "t": "is equal to 16 percent."
            },
            {
              "l": "b",
              "t": "is equal to 20 percent."
            },
            {
              "l": "c",
              "t": "is equal to 40 percent."
            },
            {
              "l": "d",
              "t": "cannot be calculated on the basis of the above information."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Mortgage A does not default with 80 %, so its PD is 20 %; B's PD is also 20 %. Weighted average PD = 0.75 × 20 % + 0.25 × 20 % = 20 %. The correlation of defaults does not change the average PD of the portfolio, only how risk is split across tranches.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Representative questions Q2 · also in: Old-exam pool #126"
        },
        {
          "num": "RQ-3",
          "qid": "RQ-3",
          "stem": "Within the process of securitisation, “senior” and “junior” tranches are created. Suppose that we have a portfolio of two mortgages of equal size with the same (positive) probability of default and that the defaults of these two mortgages are perfectly uncorrelated. This portfolio then is securitised. The risk of default of the “junior” tranche is",
          "options": [
            {
              "l": "a",
              "t": "equal to the sum of the default probabilities of the two mortgages."
            },
            {
              "l": "b",
              "t": "equal to the sum of the square of the default probability of the first mortgage and the square of the default probability of the second mortgage."
            },
            {
              "l": "c",
              "t": "higher than the average probability of default of the underlying portfolio of the two mortgages."
            },
            {
              "l": "d",
              "t": "is equal to the average probability of default of the underlying portfolio of the two mortgages divided by 2."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The junior tranche defaults as soon as at least one mortgage defaults: 1 − (1 − p)² = 2p − p², which is larger than the portfolio average p for any 0 < p < 1. Option (a) forgets to subtract p²; p² (the senior PD) is the probability that both default.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Representative questions Q3 · also in: Old-exam pool #127"
        },
        {
          "num": "RQ-5",
          "qid": "RQ-5",
          "stem": "A Structured Investment Vehicle (SIV)",
          "options": [
            {
              "l": "a",
              "t": "invests in Asset-Backed Commercial Papers (ABCP) and finances itself via credit lines from the sponsoring bank."
            },
            {
              "l": "b",
              "t": "is exposed to funding liquidity risk as it finances itself via issuing Asset-Backed Securities (ABS) that have a long maturity."
            },
            {
              "l": "c",
              "t": "buys pools of credit contracts such as mortgages from banks in order to sell these contracts to investors."
            },
            {
              "l": "d",
              "t": "is potentially unstable since it is exposed to a so-called maturity mismatch."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "An SIV buys long-term ABS and finances itself by issuing short-term ABCP (about 90 days), so it has a maturity mismatch and funding liquidity risk. (a) reverses the roles (the SIV issues ABCP; the credit line is only a backstop), (b) wrongly says the SIV funds itself with long-term ABS, and (c) describes the SPV.",
          "source": "Lecture 7, 'Securitisation process: maturity mismatch'",
          "origin": "Representative questions Q5 · also in: Final exam 2020 Q3, Old-exam pool #129"
        },
        {
          "num": "RQ-6",
          "qid": "RQ-6",
          "stem": "Which of the below developments is not one of the key developments that preceded the financial crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "The bubble in house prices."
            },
            {
              "l": "b",
              "t": "The fact that the Federal Reserve had adopted a low-interest-rate policy in the years preceding the crisis."
            },
            {
              "l": "c",
              "t": "The massive sales of US-American government bonds by Asian countries."
            },
            {
              "l": "d",
              "t": "The downgrading of asset-backed commercial papers."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Asian countries bought (not sold) large amounts of US securities to keep their exchange rates export-friendly, which helped keep US interest rates low. The house price bubble, the Fed's low-rate policy and the downgrades are all part of the lecture's story.",
          "source": "Lecture 7, '(Too) low interest rates'",
          "origin": "Representative questions Q6 · also in: Old-exam pool #130"
        },
        {
          "num": "F25-4",
          "qid": "F25-4",
          "stem": "Financial innovations that emerged in the discussion on mortgage markets in the course included all of the following except",
          "options": [
            {
              "l": "a",
              "t": "time deposits."
            },
            {
              "l": "b",
              "t": "securitisation."
            },
            {
              "l": "c",
              "t": "asset-backed commercial papers."
            },
            {
              "l": "d",
              "t": "mortgage-backed securities."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Time deposits are a traditional banking product. Securitisation, ABCP and mortgage-backed securities are the financial innovations behind the 'originate to distribute' model.",
          "source": "Lecture 7, securitisation",
          "origin": "Final exam Oct 2025 Q4 · also in: Old-exam pool #146"
        },
        {
          "num": "F25-5",
          "qid": "F25-5",
          "stem": "Credit-rating agencies may face a conflict of interest because they",
          "options": [
            {
              "l": "a",
              "t": "both advise clients on how to structure debt issues and determine the creditworthiness of the debt issues."
            },
            {
              "l": "b",
              "t": "underwrite securities and advise clients on how to structure debt issues."
            },
            {
              "l": "c",
              "t": "underwrite securities and determine the creditworthiness of the debt issues."
            },
            {
              "l": "d",
              "t": "both advise clients on how to structure debt issues and to write restrictive covenants."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Rating agencies advised issuers on how to structure products to get a good rating and then rated those same products, and they were paid by the issuers. The lecture lists this conflict of interest as a disadvantage of securitisation.",
          "source": "Lecture 7, 'Cons of securitisation'",
          "origin": "Final exam Oct 2025 Q5 · also in: Old-exam pool #147"
        },
        {
          "num": "F25-6",
          "qid": "F25-6",
          "stem": "Consider two bonds A and B that are of identical size. Bond A has a probability of default equal to 0.20 (20%), and for Bond B the probability of default is at 0.20 (20%). Suppose that defaults of the two bonds are completely uncorrelated. Construct a portfolio of these two bonds and slice it into two tranches of identical size: a senior tranche (that defaults when both mortgages default) and a junior tranche (that defaults when at least one mortgage defaults). You have to consider the validity of the following six statements:\nA. the probability of default of the junior tranche is equal to 36%\nB. the probability of default of the junior tranche is equal to 64%\nC. the probability of default of the senior tranche is equal to 4%\nD. the average probability of default of the portfolio is at 40%\nE. credit enhancement is reduced if the correlation of the default probabilities increases\nF. the average probability of default of the portfolio is 20%, and credit enhancement is increased if the correlation of the default probabilities increases.\n\nHow many of the above six statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "2 of the above six statements are correct."
            },
            {
              "l": "b",
              "t": "3 of the above six statements are correct."
            },
            {
              "l": "c",
              "t": "4 of the above six statements are correct."
            },
            {
              "l": "d",
              "t": "5 of the above six statements are correct."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "howmany",
          "explanation": "PD = 0.2 for both. Junior: 1 − 0.8² = 36 % (A true, B false). Senior: 0.2² = 4 % (C true). Portfolio average 20 % (D false). Higher default correlation reduces credit enhancement (E true), so the second half of F is false. A, C and E are correct: 3.",
          "source": "Lecture 7, securitisation examples",
          "origin": "Final exam Oct 2025 Q6 · also in: Old-exam pool #148"
        },
        {
          "num": "F25-7",
          "qid": "F25-7",
          "stem": "Amongst the many developments that took place before and during the Global Financial Crisis of 2007-2008 are the following five factors:\nA. The bubble in house prices.\nB. The large flows of capital into the US, especially from Asian countries in the years preceding the crisis.\nC. The fact that the Federal Reserve had adopted a low-interest-rate policy in the years preceding the crisis.\nD. The downgrading of Asset-Backed Securities (ABS) from 2007 onwards.\nE. The Asset Backed Commercial Papers (ABCP) had maturities that exceeded the maturities of the underlying Asset-Backed Securities (ABS) such that these ABCP often were not backed by sufficient collateral.\n\nHow many of the above five factors can indeed be seen as being relevant developments before and during the Global Financial Crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "1"
            },
            {
              "l": "b",
              "t": "2"
            },
            {
              "l": "c",
              "t": "3"
            },
            {
              "l": "d",
              "t": "the correct answer is not given amongst the other three answers."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "A–D are all part of the lecture's story: the housing bubble, Asian purchases of US securities (capital inflows), the Fed's low rates and the ABS downgrades from 2007. E is false: ABCP had shorter maturities than the ABS (that was the maturity mismatch). Four factors are relevant, which is not among options a–c.",
          "source": "Lecture 7",
          "origin": "Final exam Oct 2025 Q7 · also in: Old-exam pool #149"
        },
        {
          "num": "J23-12",
          "qid": "J23-12",
          "stem": "Consider the two bonds A and B that are of identical size. Bond A has a probability of default equal to 0.1 (10%), and for bond B the probability of default is at 0.3 (30%). Suppose that the defaults of the two bonds are completely uncorrelated. Construct a portfolio of these two bonds and subsequently slice that portfolio into two tranches of identical size, i.e. in a senior tranche and a junior tranche. Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The average probability of default of the portfolio of the two bonds is at 15%."
            },
            {
              "l": "b",
              "t": "The probability of default of the senior tranche is equal to 4%."
            },
            {
              "l": "c",
              "t": "The average probability of default of the portfolio that now consists of a senior and a junior tranche is lower than the average probability of default of the original portfolio of the two bonds due to credit enhancement."
            },
            {
              "l": "d",
              "t": "The probability of default of the junior tranche is equal to 37%."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "single",
          "explanation": "PD A = 0.1, PD B = 0.3, uncorrelated. Average = 20 % (not 15 %). Senior (both default) = 0.1 × 0.3 = 3 % (not 4 %). Junior (at least one defaults) = 1 − 0.9 × 0.7 = 37 %. Tranching redistributes risk, so the tranches still average 20 % and (c) is false.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Exam Jan 2023 Q12 · also in: Resit exam 2021 Q10, Old-exam pool #206"
        },
        {
          "num": "J23-13",
          "qid": "J23-13",
          "stem": "In a famous study on the Global Financial Crisis of 2007-2008, the following statement can be found: “To ensure funding liquidity for the [structured investment] vehicle, the sponsoring bank grants a credit line to the vehicle, called a “liquidity backstop”.” Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "This “liquidity backstop” means that the sponsoring bank is obliged to buy back the Asset Backed Commercial Papers (ABCP) that the structured investment vehicle has bought from the sponsoring bank."
            },
            {
              "l": "b",
              "t": "This credit line reduces the liquidity risk that the sponsoring bank faces."
            },
            {
              "l": "c",
              "t": "This credit line guarantees that the structured investment vehicle can always buy Asset Backed Commercial Papers (ABCP) from the sponsoring bank."
            },
            {
              "l": "d",
              "t": "This credit line exposes the sponsoring bank to liquidity risks."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The liquidity backstop is a credit line the SIV can draw on when it cannot roll over its ABCP. The sponsoring bank must then supply liquidity, so the line exposes the bank to liquidity risk. The SIV issues ABCP to investors; it does not buy ABCP from the bank.",
          "source": "Lecture 7, 'Securitisation process: maturity mismatch'",
          "origin": "Exam Jan 2023 Q13 · also in: Old-exam pool #249, Old-exam pool #256"
        },
        {
          "num": "F20-2",
          "qid": "F20-2",
          "stem": "In the analysis of the subprime crisis, we encountered the notion of “credit enhancement”. What is the correct description of this term?",
          "options": [
            {
              "l": "a",
              "t": "In securitisation, some tranches will have no default risk such that the average probability of default of the portfolio of all tranches decreases."
            },
            {
              "l": "b",
              "t": "The larger the number of securities in the underlying pool that will be securitised, the larger is the fraction of the tranches that ends up with higher credit ratings than the average."
            },
            {
              "l": "c",
              "t": "The larger the number of securities in the underlying pool that will be securitised, the larger is the fraction of the tranches that ends up with higher credit ratings than the average and this fraction increases when default rates are more correlated."
            },
            {
              "l": "d",
              "t": "Credit enhancement refers to the fact that after the subprime crisis, the bad credits were written off such that the average quality of the loans in the banks’ lending portfolios increased again."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Credit enhancement: the more securities in the pool, the larger the share of tranches with a lower PD than the pool average. (a) Tranching does not lower the average PD; (c) higher correlation reduces credit enhancement; (d) has nothing to do with securitisation.",
          "source": "Lecture 7, 'Securitisation: insights'",
          "origin": "Final exam 2020 Q2 · also in: Old-exam pool #208"
        },
        {
          "num": "F20-4",
          "qid": "F20-4",
          "stem": "Consider two mortgages of exactly the same size and assume also that each of them has a probability of default PD and that default risks are uncorrelated. These two mortgages are then pooled into one portfolio and that this portfolio subsequently is sliced into a so-called senior and a junior tranche. The probability of default of the senior tranche then is",
          "options": [
            {
              "l": "a",
              "t": "1 – ((1 – PD) * (1 – PD))."
            },
            {
              "l": "b",
              "t": "(1 – PD) * (1 – PD)."
            },
            {
              "l": "c",
              "t": "((1+PD) * (1+PD)) – 2*PD – 1."
            },
            {
              "l": "d",
              "t": "(PD * PD) – PD."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "single",
          "explanation": "The senior tranche defaults only if both mortgages default: PD × PD. Option (c) is (1 + PD)² − 2PD − 1 = PD². Option (a), 1 − (1 − PD)², is the junior tranche's PD.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Final exam 2020 Q4"
        },
        {
          "num": "P-12",
          "qid": "P-12",
          "stem": "Consider two bonds A and B that are of exactly the same size. Bond A has a probability of default equal to 0.20 (20 percent), and for Bond B the probability of not going into default is at 0.80 (80 percent). Suppose that the defaults of the two bonds are completely uncorrelated. Construct a portfolio of these two bonds and subsequently slice that portfolio into two identical-size tranches: a senior tranche (which is the first to be paid out of the cash flows of the underlying portfolio) and a junior tranche (which pays out after the senior tranche has been paid) as in the examples discussed during the lectures. You have to examine the validity of the below five statements:\nA. The probability of default of the junior tranche is equal to 36 percent.\nB. The probability of default of the junior tranche is equal to 48 percent.\nC. The average probability of default of the portfolio of the two bonds is at 40 percent.\nD. Adding a third bond with a probability of default of 8% to the portfolio that is to be sliced up, drives down the probability of default of the senior tranche. You should assume zero correlation of this third bond with the defaults of the bonds A and B and also that its size is identical when compared with the size of bonds A and B.\nE. Credit enhancement in this example will be smaller if the correlation of the default probabilities equals one.\n\nHow many of the above five statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "one of the above five statements is correct."
            },
            {
              "l": "b",
              "t": "two of the above five statements are correct."
            },
            {
              "l": "c",
              "t": "three of the above five statements are correct."
            },
            {
              "l": "d",
              "t": "four of the above five statements are correct."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "howmany",
          "explanation": "Both PDs are 0.2. A: junior = 1 − 0.8² = 36 %, true. B: false. C: the average is 20 %, so false. D: with a third bond the senior tranche defaults only if all three default: 0.2 × 0.2 × 0.08 = 0.32 % < 4 %, true. E: with perfect correlation there is no credit enhancement, true. A, D and E are correct: 3.",
          "source": "Lecture 7, securitisation examples 1 and 2",
          "origin": "Old-exam pool #12"
        },
        {
          "num": "P-13",
          "qid": "P-13",
          "stem": "Which of the following events was not present in the run-up to the Global Financial Crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "The “Great Moderation” that was characterised by stable and (very) low inflation rates."
            },
            {
              "l": "b",
              "t": "The strategy of low policy interest rates that the Federal Reserve adopted after the bursting of the Internet Bubble."
            },
            {
              "l": "c",
              "t": "The shift in the banking industry towards the “Originate and Hold” model."
            },
            {
              "l": "d",
              "t": "The large purchases of US government bonds by a number of Asian countries."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Banks moved away from 'originate and hold' towards 'originate to distribute'. The Great Moderation, the Fed's low rates after the dot-com bust and Asian purchases of US bonds were all part of the run-up.",
          "source": "Lecture 7",
          "origin": "Old-exam pool #13"
        },
        {
          "num": "P-54",
          "qid": "P-54",
          "stem": "Which of the following events did not take place in the five years before the Global Financial Crisis of 2007-2008?",
          "options": [
            {
              "l": "a",
              "t": "Low interest rates."
            },
            {
              "l": "b",
              "t": "Low inflation rates."
            },
            {
              "l": "c",
              "t": "The securitisation process."
            },
            {
              "l": "d",
              "t": "The shift from the ‘originate to distribute’ to the ‘originate and hold’ model of banking."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The shift ran the other way, from 'originate and hold' to 'originate to distribute'. Low interest rates, low inflation and securitisation all marked the years before the crisis.",
          "source": "Lecture 7",
          "origin": "Old-exam pool #54"
        },
        {
          "num": "P-55",
          "qid": "P-55",
          "stem": "The so-called ‘junior’ tranches",
          "options": [
            {
              "l": "a",
              "t": "are the tranches with the highest risk and hence lowest expected return."
            },
            {
              "l": "b",
              "t": "are the tranches of securitised products that only pay out after all other tranches have been paid out."
            },
            {
              "l": "c",
              "t": "are the tranches that are sold to the most risk-averse investors."
            },
            {
              "l": "d",
              "t": "are the tranches that have the shortest duration."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Junior ('toxic waste') tranches are paid only after all other tranches. They carry the highest risk and therefore the highest expected return, and they go to investors with a large risk appetite.",
          "source": "Lecture 7, 'Securitisation: first and second steps'",
          "origin": "Old-exam pool #55"
        },
        {
          "num": "P-56",
          "qid": "P-56",
          "stem": "Consider a portfolio that consists of two corporate bonds that are identical to each other, except for their probability of default. The first corporate bond has a probability of default of 20 percent, whereas the second corporate bond has a probability of default of 30 percent. Assume that the defaults in the two bonds are completely uncorrelated to each other. The average probability of default of the portfolio of the senior and junior tranches is at ___ percent, the probability of default of the senior tranche is at ___ percent and the probability of default of the junior tranche is at ___ percent. You need to assume that the senior and junior tranche are of the same size.",
          "options": [
            {
              "l": "a",
              "t": "25; 6; 44"
            },
            {
              "l": "b",
              "t": "50; 25; 45"
            },
            {
              "l": "c",
              "t": "25; 12.5; 78.5"
            },
            {
              "l": "d",
              "t": "None of the other three answers is correct."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "calc",
          "fmt": "respectively",
          "explanation": "Average PD = (0.2 + 0.3)/2 = 25 %. Senior = 0.2 × 0.3 = 6 %. Junior = 1 − 0.8 × 0.7 = 44 %. Check: (6 + 44)/2 = 25 %.",
          "source": "Lecture 7, securitisation example 1",
          "origin": "Old-exam pool #56"
        },
        {
          "num": "P-57",
          "qid": "P-57",
          "stem": "Rather than issuing long-term debt, a Structured Investment Vehicle (SIV) typically sells",
          "options": [
            {
              "l": "a",
              "t": "asset-backed government bonds."
            },
            {
              "l": "b",
              "t": "asset-backed subprime corporate bonds."
            },
            {
              "l": "c",
              "t": "asset-backed commercial papers."
            },
            {
              "l": "d",
              "t": "deposits."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "SIVs financed their long-term ABS holdings by issuing short-term asset-backed commercial paper.",
          "source": "Lecture 7, 'Securitisation process: maturity mismatch'",
          "origin": "Old-exam pool #57"
        },
        {
          "num": "P-205",
          "qid": "P-205",
          "stem": "The growth of the subprime mortgage market was accompanied by",
          "options": [
            {
              "l": "a",
              "t": "a decline in the housing industry because of the higher default risk of such subprime mortgages."
            },
            {
              "l": "b",
              "t": "a decrease in home ownership as investors chose other assets over houses due to the higher riskiness of subprime mortgages."
            },
            {
              "l": "c",
              "t": "increased demand for houses."
            },
            {
              "l": "d",
              "t": "increased demand for mortgages that arose within the shift from the originate-and-distribute to the originate-and-hold model."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Subprime lending let many more households get mortgages, which raised the demand for houses and fed the house price bubble. The shift ran from originate-and-hold to originate-to-distribute, not the other way round.",
          "source": "Lecture 7",
          "origin": "Old-exam pool #205"
        },
        {
          "num": "P-207",
          "qid": "P-207",
          "stem": "In the second figure on the transactions within the securitisation process that we examined in the lectures and tutorials, several transactions took place between the bank, the Structured Investment Vehicle (SIV), the Special Purpose Vehicle (SPV) and the investors. Which of the following transactions was amongst those that were examined in the figure in question?",
          "options": [
            {
              "l": "a",
              "t": "The bank sells a subprime mortgage to the investor."
            },
            {
              "l": "b",
              "t": "The bank sells Asset Backed Securities (ABSs) to the investor."
            },
            {
              "l": "c",
              "t": "The SPV sells Asset Backed Securities (ABSs) to the investor."
            },
            {
              "l": "d",
              "t": "The SIV sells Asset Backed Commercial Papers (ABCPs) to the investor."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "In the second figure, the bank sells the portfolio to the SPV, the SPV sells ABS to the SIV, and the SIV sells ABCP to investors (backed by the bank's credit line). The ABS do not go directly to investors in that figure.",
          "source": "Lecture 7, 'Securitisation process' (second figure)",
          "origin": "Old-exam pool #207"
        },
        {
          "num": "P-209",
          "qid": "P-209",
          "stem": "In his article on Over the Cliff: From the Subprime to the Global Financial Crisis, Frederic S. Mishkin indicates that shortly after the bankruptcy of Lehman Brothers in September 2008, also the insurer American International Group (AIG) was seen as a financial company with extremely high risk which then caused other financial companies to quickly reduce their lending to AIG. Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "AIG was the largest stockholder of Lehman Brothers and the losses on its position in Lehman Brothers led markets to doubt the creditworthiness of AIG."
            },
            {
              "l": "b",
              "t": "The increase in value of the Collaterized Debt Securities on the asset side of AIG’s balance sheet reduced its net worth."
            },
            {
              "l": "c",
              "t": "AIG offered insurance against decreases in the value of Asset Backed Securities by selling so-called Credit Default Swaps."
            },
            {
              "l": "d",
              "t": "AIG offered insurance against decreases in the value of Asset Backed Securities by buying so-called Credit Default Swaps of which the value decreased substantially."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "AIG had sold large amounts of credit default swaps, i.e. insurance against losses on asset-backed securities. When those securities lost value, AIG faced huge payouts.",
          "source": "Mishkin (2011), 'Over the Cliff'; Lecture 7 (CDS)",
          "origin": "Old-exam pool #209"
        },
        {
          "num": "P-252",
          "qid": "P-252",
          "stem": "The statement “Banks have strong incentives to carefully select and monitor their customers in order to minimise credit risk” refers to which model?",
          "options": [
            {
              "l": "a",
              "t": "The originate-to-lend model."
            },
            {
              "l": "b",
              "t": "The originate-to-distribute model."
            },
            {
              "l": "c",
              "t": "The originate-and-hold model."
            },
            {
              "l": "d",
              "t": "The too-important-to-fail model."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l7",
          "kind": "concept",
          "fmt": "single",
          "explanation": "In 'originate and hold' the bank keeps the loan on its balance sheet until maturity and bears the credit risk. So it has strong incentives to screen and monitor borrowers carefully.",
          "source": "Lecture 7, 'Originate and hold model'",
          "origin": "Old-exam pool #252"
        }
      ]
    },
    {
      "id": "t_l8",
      "label": "L8 – Central Banks",
      "source": "Old final exams + question pool, no duplicates",
      "questions": [
        {
          "num": "RQ-7",
          "qid": "RQ-7",
          "stem": "Most central banks nowadays focus on achieving price stability. You are given the following four alleged advantages of price stability:\nA. Preventing arbitrary redistribution of wealth and income.\nB. Reducing inflation risk premia in interest rates.\nC. Avoiding unnecessary hedging activities.\nD. Increasing benefits of holding cash.\n\nHow many of the above four advantages actually are advantages of price stability?",
          "options": [
            {
              "l": "a",
              "t": "one of the above four advantages."
            },
            {
              "l": "b",
              "t": "two of the above four advantages."
            },
            {
              "l": "c",
              "t": "three of the above four advantages."
            },
            {
              "l": "d",
              "t": "four of the above four advantages."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All four are on the lecture's list of six benefits of price stability: transparency of relative prices, fewer tax/social security distortions, no arbitrary redistribution, lower inflation risk premia, no unnecessary hedging, and higher benefits of holding cash (lower shoe-leather costs).",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Representative questions Q7 · also in: Old-exam pool #131"
        },
        {
          "num": "RQ-8",
          "qid": "RQ-8",
          "stem": "Which of the below statements is not correct?",
          "options": [
            {
              "l": "a",
              "t": "Independent central banks can be thought of having superior abilities to avoid the time-inconsistency problem."
            },
            {
              "l": "b",
              "t": "Independent central banks can avoid the political business cycle in the definition of monetary policy."
            },
            {
              "l": "c",
              "t": "Independent central banks are less likely to buy government bonds in the primary market."
            },
            {
              "l": "d",
              "t": "Independent central banks are more likely to use credit rationing to improve lending conditions."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Credit rationing is a bank's tool for managing credit risk and has nothing to do with central bank independence. (a)–(c) are the lecture's arguments for independence: it solves the time-inconsistency problem, avoids the political business cycle, and makes direct purchases of government bonds less likely.",
          "source": "Lecture 8, 'Should central banks be independent?'",
          "origin": "Representative questions Q8 · also in: Old-exam pool #132"
        },
        {
          "num": "RQ-9",
          "qid": "RQ-9",
          "stem": "The “Banking Union” in the euro area may consist of the following six mechanisms/organisations/programmes:\nA. Securities Markets Programme (SMP)\nB. Single Supervisory Mechanism (SSM)\nC. Outright Monetary Transactions (OMT)\nD. Single Resolution Mechanism (SRM)\nE. European Deposit Insurance Scheme (EDIS)\nF. Common Regulatory Action Programme (CRAP)\n\nHow many of the above six mechanisms/organisations/programmes actually do belong to the “Banking Union”?",
          "options": [
            {
              "l": "a",
              "t": "2"
            },
            {
              "l": "b",
              "t": "3"
            },
            {
              "l": "c",
              "t": "4"
            },
            {
              "l": "d",
              "t": "5"
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "The Banking Union has three pillars: SSM (supervision, 2014), SRM (resolution, 2016) and EDIS (deposit insurance, proposed but not yet active). SMP and OMT are ECB bond-buying programmes, and CRAP does not exist.",
          "source": "Lecture 8, 'Expanding role of the ECB'",
          "origin": "Representative questions Q9 · also in: Old-exam pool #133"
        },
        {
          "num": "F25-13",
          "qid": "F25-13",
          "stem": "Most central banks at the present point of time focus on achieving price stability. Which of the below four statements does not refer to an advantage of price stability?",
          "options": [
            {
              "l": "a",
              "t": "Decreasing transparency of relative prices."
            },
            {
              "l": "b",
              "t": "Reducing distortions of tax and social security systems."
            },
            {
              "l": "c",
              "t": "Preventing arbitrary redistribution of wealth and income."
            },
            {
              "l": "d",
              "t": "Increasing the benefits of holding cash."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability improves (not decreases) the transparency of relative prices. The other three are on the lecture's list of benefits.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Final exam Oct 2025 Q13 · also in: Old-exam pool #154"
        },
        {
          "num": "F25-14",
          "qid": "F25-14",
          "stem": "Which is not a characteristic of the Federal Reserve System?",
          "options": [
            {
              "l": "a",
              "t": "The Federal Reserve System has a regional representation."
            },
            {
              "l": "b",
              "t": "The Federal Reserve Banks supervise and regulate financial institutions."
            },
            {
              "l": "c",
              "t": "The Federal Open Market Committee sets the reserve requirements."
            },
            {
              "l": "d",
              "t": "The implementation of open-market operations is decentralised at the level of the various Federal Reserve Banks."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "In the Fed system, open market operations are implemented centrally by the trading desk of the New York Fed, on the FOMC's directive. (Decentralised implementation through the national central banks is the euro-area set-up.) The Fed's 12 regional Reserve Banks and their supervisory role are real features.",
          "source": "Lecture 8, 'Federal Open Market Committee'",
          "origin": "Final exam Oct 2025 Q14 · also in: Old-exam pool #155"
        },
        {
          "num": "F25-15",
          "qid": "F25-15",
          "stem": "The European Central Bank",
          "options": [
            {
              "l": "a",
              "t": "oversees all banks through the Single Supervisory Mechanism."
            },
            {
              "l": "b",
              "t": "oversees all banks through the Outright Monetary Transactions programme."
            },
            {
              "l": "c",
              "t": "instructs the national commercial banks to conduct open-market operations."
            },
            {
              "l": "d",
              "t": "decides on the minimum reserve requirements."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ECB's Governing Council decides on key interest rates, reserve requirements and liquidity provision. The SSM covers only significant banks directly; OMT is a bond-purchase programme; OMOs are carried out by the national central banks, not commercial banks.",
          "source": "Lecture 8, 'Governing Council'",
          "origin": "Final exam Oct 2025 Q15 · also in: Old-exam pool #156"
        },
        {
          "num": "F25-16",
          "qid": "F25-16",
          "stem": "Which of the following advantages is not an advantage of central bank independence?",
          "options": [
            {
              "l": "a",
              "t": "Independent central banks are able to prevent mismatches between monetary policy and fiscal policy."
            },
            {
              "l": "b",
              "t": "Independent central banks avoid the political business cycle."
            },
            {
              "l": "c",
              "t": "Independent central banks are less likely to finance budget deficits by printing money or by directly purchasing government bonds on the primary market."
            },
            {
              "l": "d",
              "t": "Independent central banks can reduce the time-inconsistency problem in monetary policy."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A possible lack of coordination between monetary and fiscal policy is an argument against independence (e.g. US monetary contraction with fiscal expansion in the early 1980s). (b)–(d) are arguments in favour.",
          "source": "Lecture 8, 'Should central banks be independent?'",
          "origin": "Final exam Oct 2025 Q16 · also in: Old-exam pool #19"
        },
        {
          "num": "J23-17",
          "qid": "J23-17",
          "stem": "Which of the following statements on price stability is correct?",
          "options": [
            {
              "l": "a",
              "t": "Stable inflation rates and stable inflation expectations reduce real interest rates according to the Fisher parity."
            },
            {
              "l": "b",
              "t": "Central banks that focus on keeping inflation low do not choose a nominal anchor, but do choose a real anchor."
            },
            {
              "l": "c",
              "t": "Price stability has the disadvantage of hindering the central role that relative prices play in the allocation of factors of production."
            },
            {
              "l": "d",
              "t": "Price stability increases the benefits of holding cash."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability lowers 'shoe-leather costs', so holding cash becomes more attractive. (a) Stable inflation expectations lower inflation risk premia in nominal rates; the Fisher equation does not imply lower real rates. (b) An inflation target is a nominal anchor. (c) Price stability makes relative prices clearer, not less clear.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Exam Jan 2023 Q17 · also in: Final exam 2020 Q10, Old-exam pool #254"
        },
        {
          "num": "J23-18",
          "qid": "J23-18",
          "stem": "You have to examine the validity of the following statements on independence of central banks.\nA. Instrument independence refers to the ability of the central bank to set the goals of monetary policy.\nB. Goal independence refers to the ability of the central bank to set the instruments of monetary policy.\nC. Financial independence refers to the ability of the central bank to give credits to political authorities whilst not allowing it to receive credits from political authorities.\nD. Political independence refers to the ability of the central bank to design fiscal policy without taking instructions from political authorities.\n\nHow many of the above four statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "0 of the above four statements are correct."
            },
            {
              "l": "b",
              "t": "1 of the above four statements is correct."
            },
            {
              "l": "c",
              "t": "2 of the above four statements are correct."
            },
            {
              "l": "d",
              "t": "3 of the above four statements are correct."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All four are wrong. A and B swap the definitions: instrument independence means setting the tools, goal independence means setting the goals. Financial independence means the central bank determines its own budget. Political independence means not taking instructions from politicians on monetary policy, not designing fiscal policy. So 0 are correct.",
          "source": "Lecture 8, 'Central bank independence'",
          "origin": "Exam Jan 2023 Q18"
        },
        {
          "num": "R21-14",
          "qid": "R21-14",
          "stem": "Central banks increasingly focus on obtaining and guaranteeing price stability. This is due to the fact that low and stable inflation\nA. improves transparency of relative prices.\nB. reduces distortions of tax and social security systems.\nC. prevents arbitrary redistribution of wealth and income.\nD. reduces inflation risk premia in interest rates.\nE. avoids unnecessary hedging activities.\nF. increases the benefits of holding cash.\n\nHow many of the above six statements are truly advantages of low and stable inflation?",
          "options": [
            {
              "l": "a",
              "t": "3 of them are advantages of low and stable inflation."
            },
            {
              "l": "b",
              "t": "4 of them are advantages of low and stable inflation."
            },
            {
              "l": "c",
              "t": "5 of them are advantages of low and stable inflation."
            },
            {
              "l": "d",
              "t": "6 of them are advantages of low and stable inflation."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All six statements are exactly the lecture's six benefits of low and stable inflation.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Resit exam 2021 Q14"
        },
        {
          "num": "R21-15",
          "qid": "R21-15",
          "stem": "The renowned Banking Union in the European Union has several goals. Which of the following is not one of the goals of the Banking Union?",
          "options": [
            {
              "l": "a",
              "t": "Dealing with the interrelations of banks within the euro area on a centralised level."
            },
            {
              "l": "b",
              "t": "Defining banking policy on a centralised level in order to avoid national differences that can create regulatory concerns as well as differences in the competitive position of banks."
            },
            {
              "l": "c",
              "t": "Ensuring that European banks hold the same amount of capital when compared with their US-American counterparts."
            },
            {
              "l": "d",
              "t": "Creating clearer mechanisms that prevent/reduce the need for calls upon the public purse."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The Banking Union aims to handle cross-border bank links centrally, ensure a level playing field, create clearer resolution mechanisms and minimise calls on the public purse. Matching US banks' capital levels is not one of its goals.",
          "source": "Lecture 8, 'Expanding role of the ECB'",
          "origin": "Resit exam 2021 Q15 · also in: Old-exam pool #270"
        },
        {
          "num": "F20-11",
          "qid": "F20-11",
          "stem": "The Single Resolution Mechanism (SRM) implies that the ECB now is also responsible for the supervision of",
          "options": [
            {
              "l": "a",
              "t": "all significant banks in Europe."
            },
            {
              "l": "b",
              "t": "all banks in the euro area."
            },
            {
              "l": "c",
              "t": "all significant banks in the euro area."
            },
            {
              "l": "d",
              "t": "This question does not make sense."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The SRM is about resolving failing banks, while supervision of significant euro-area banks comes from the SSM. The premise 'SRM ⇒ supervision' is wrong, so the question does not make sense.",
          "source": "Lecture 8, SSM and SRM",
          "origin": "Final exam 2020 Q11"
        },
        {
          "num": "F20-12",
          "qid": "F20-12",
          "stem": "You are given the following three statements on the Federal Reserve System:\nI. The Federal Reserve System has a regional representation.\nII. The Federal Reserve Banks supervise and regulate financial institutions.\nIII. Open-market operations are conducted in a centralised manner by the individual Federal Reserve Banks.\n\nHow many of the above statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "0"
            },
            {
              "l": "b",
              "t": "1"
            },
            {
              "l": "c",
              "t": "2"
            },
            {
              "l": "d",
              "t": "3"
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "I is true (12 regional Federal Reserve Banks) and II is true (they supervise and regulate). III is false: OMOs are executed centrally by the New York Fed's trading desk. Two statements are correct.",
          "source": "Lecture 8, structure of the Federal Reserve System",
          "origin": "Final exam 2020 Q12"
        },
        {
          "num": "F20-13",
          "qid": "F20-13",
          "stem": "Which of the following is not an advantage of central bank independence?",
          "options": [
            {
              "l": "a",
              "t": "Independent central banks are more likely to focus on longer-run objectives."
            },
            {
              "l": "b",
              "t": "Independent central banks coordinate their decisions with politicians in a stricter manner."
            },
            {
              "l": "c",
              "t": "Independent central banks are less likely to directly purchase government bonds."
            },
            {
              "l": "d",
              "t": "Independent central banks are more likely to focus on stability of prices."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Closer coordination with politicians is not an argument for independence; independence is meant to shield the central bank from politicians. Ironically, a lack of coordination with fiscal policy is listed as a drawback of independence.",
          "source": "Lecture 8, 'Should central banks be independent?'",
          "origin": "Final exam 2020 Q13"
        },
        {
          "num": "P-17",
          "qid": "P-17",
          "stem": "Which of the following is an advantage of low and stable positive rates of inflation in the euro area?",
          "options": [
            {
              "l": "a",
              "t": "The risk of deflation in member states is reduced."
            },
            {
              "l": "b",
              "t": "Distortions of tax and social security systems in member states are increased."
            },
            {
              "l": "c",
              "t": "Redistribution of wealth between lenders and borrowers in the member states is more of a danger."
            },
            {
              "l": "d",
              "t": "Inflation risk premia in interest rates increase in the weaker member states."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A low but positive inflation rate keeps a buffer against deflation, which is hard to escape (see lectures 6 and 10). Options (b)–(d) state the opposite of the benefits of price stability.",
          "source": "Lecture 8, 'Price stability'; Lecture 6 (debt deflation)",
          "origin": "Old-exam pool #17"
        },
        {
          "num": "P-18",
          "qid": "P-18",
          "stem": "Within the start of the Single Supervisory Mechanism (SSM), the ECB saw its mandate extend to",
          "options": [
            {
              "l": "a",
              "t": "bank supervision."
            },
            {
              "l": "b",
              "t": "bank resolution."
            },
            {
              "l": "c",
              "t": "macroprudential regulation of banks."
            },
            {
              "l": "d",
              "t": "bank supervision, bank resolution as well as macroprudential regulation of banks."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The SSM gave the ECB bank supervision (significant banks directly). Resolution came later through the SRM, and macroprudential policy lies with national authorities and the ESRB.",
          "source": "Lecture 8, 'Single Supervisory Mechanism'",
          "origin": "Old-exam pool #18"
        },
        {
          "num": "P-64",
          "qid": "P-64",
          "stem": "In the United States, open-market-operations are executed by",
          "options": [
            {
              "l": "a",
              "t": "The United States Treasury."
            },
            {
              "l": "b",
              "t": "The central banks of each of the individual 50 states of the United States."
            },
            {
              "l": "c",
              "t": "The Federal Reserve Bank of New York."
            },
            {
              "l": "d",
              "t": "The Governing Council."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The FOMC decides, and the trading desk of the Federal Reserve Bank of New York carries out the OMOs centrally.",
          "source": "Lecture 8, 'Federal Open Market Committee'",
          "origin": "Old-exam pool #64"
        },
        {
          "num": "P-65",
          "qid": "P-65",
          "stem": "Since the start of the Single Supervisory Mechanism (SSM), the ECB supervises",
          "options": [
            {
              "l": "a",
              "t": "all significant banks in Europe."
            },
            {
              "l": "b",
              "t": "all significant financial intermediaries in the euro area."
            },
            {
              "l": "c",
              "t": "all banks in the euro area."
            },
            {
              "l": "d",
              "t": "all significant banks in the euro area."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Under the SSM the ECB directly supervises all 'significant' banks in the euro area (100+ banks, more than 80 % of assets). Smaller banks stay with national supervisors.",
          "source": "Lecture 8, 'Single Supervisory Mechanism (SSM, 2014)'",
          "origin": "Old-exam pool #65"
        },
        {
          "num": "P-66",
          "qid": "P-66",
          "stem": "You have to examine the validity of the following statements on independence of central banks.\nA. Instrument independence refers to the ability of the central bank to set the goals of monetary policy.\nB. Goal independence refers to the ability of the central bank to set the instruments of monetary policy.\nC. Financial independence refers to the ability of the central bank to give credits to political authorities whilst not allowing it to receive credits from political authorities.\nD. Political independence refers to the ability of the central bank to design monetary policy without taking instructions from political authorities.\n\nHow many of the above four statements are correct?",
          "options": [
            {
              "l": "a",
              "t": "0 of the above four statements are correct."
            },
            {
              "l": "b",
              "t": "1 of the above four statements is correct."
            },
            {
              "l": "c",
              "t": "2 of the above four statements are correct."
            },
            {
              "l": "d",
              "t": "3 of the above four statements are correct."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "A and B swap the definitions, and C is wrong because financial independence means setting its own budget. D is correct: political independence means not taking instructions from political authorities on monetary policy. One statement is correct.",
          "source": "Lecture 8, 'Central bank independence'",
          "origin": "Old-exam pool #66"
        },
        {
          "num": "P-210",
          "qid": "P-210",
          "stem": "Which of the following is not an advantage of low and stable positive rates of inflation?",
          "options": [
            {
              "l": "a",
              "t": "Improving transparency of relative prices."
            },
            {
              "l": "b",
              "t": "Reducing distortions of tax and social security systems."
            },
            {
              "l": "c",
              "t": "Increasing the redistribution of wealth between lenders and borrowers."
            },
            {
              "l": "d",
              "t": "Reducing inflation risk premia in interest rates."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability prevents arbitrary redistribution between lenders and borrowers. The other three are listed benefits.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Old-exam pool #210"
        },
        {
          "num": "P-211",
          "qid": "P-211",
          "stem": "Central banks can have different goals. Which one of the goals below figures amongst the goals of central banks as discussed in the book of Mishkin, Matthews and Giuliodori?",
          "options": [
            {
              "l": "a",
              "t": "Unemployment below the natural rate of unemployment"
            },
            {
              "l": "b",
              "t": "Zero inflation"
            },
            {
              "l": "c",
              "t": "Stability of financial markets"
            },
            {
              "l": "d",
              "t": "Exchange-rate stability as in the case of the European Central Bank"
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Stability of financial markets is one of the goals Mishkin lists. The employment goal is unemployment at the natural rate (not below it), price stability means low, not zero, inflation, and the ECB has no exchange-rate goal.",
          "source": "Lecture 8, 'Other (potential) goals of monetary policy'",
          "origin": "Old-exam pool #211"
        },
        {
          "num": "P-212",
          "qid": "P-212",
          "stem": "Regarding central bank independence,",
          "options": [
            {
              "l": "a",
              "t": "the Fed is more independent than the European Central Bank."
            },
            {
              "l": "b",
              "t": "the European Central Bank is more independent than the Fed."
            },
            {
              "l": "c",
              "t": "the trend in industrialized nations has been to reduce central bank independence."
            },
            {
              "l": "d",
              "t": "the Bank of England has the longest tradition of independence of any central bank in the world."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ECB is the most independent central bank in the world (instrument and goal independent, with treaty protection). The trend has been towards more independence, and the Bank of England is less independent than the Fed and the ECB.",
          "source": "Lecture 8, 'How independent is the ECB?'",
          "origin": "Old-exam pool #212"
        },
        {
          "num": "P-248",
          "qid": "P-248",
          "stem": "Which of the following statements about the benefits of price stability is not correct?",
          "options": [
            {
              "l": "a",
              "t": "Price stability reduces distortions of tax and social security systems."
            },
            {
              "l": "b",
              "t": "Price stability prevents arbitrary redistribution of wealth."
            },
            {
              "l": "c",
              "t": "Price stability stimulates hedging activities."
            },
            {
              "l": "d",
              "t": "Price stability increases benefits of holding cash."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l8",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Price stability avoids unnecessary hedging; it does not stimulate it. The other three are listed benefits.",
          "source": "Lecture 8, 'Price stability'",
          "origin": "Old-exam pool #248"
        }
      ]
    },
    {
      "id": "t_l9",
      "label": "L9 – Money Supply",
      "source": "Old final exams + question pool, no duplicates",
      "questions": [
        {
          "num": "RQ-10",
          "qid": "RQ-10",
          "stem": "Assume that you know the total amount of deposits (D) and the so-called currency ratio (c). This information suffices to allow you to calculate",
          "options": [
            {
              "l": "a",
              "t": "the amount of high-powered money"
            },
            {
              "l": "b",
              "t": "the money supply M1"
            },
            {
              "l": "c",
              "t": "the required reserves"
            },
            {
              "l": "d",
              "t": "none of the other three"
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "With C = c × D you get M1 = C + D = (1 + c) × D. The monetary base needs reserves (C + R), and required reserves need r, so neither can be calculated from D and c alone.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Representative questions Q10 · also in: Old-exam pool #134"
        },
        {
          "num": "RQ-11",
          "qid": "RQ-11",
          "stem": "Assume that monetary base (MB) is at 10,000 with currency in circulation (C) being at 5,000 and reserves (R) being at 5,000. You also know that the money multiplier is 4. What then is the sum of the excess reserve ratio (e) and the required reserve ratio (r), i.e. what is the level of e + r?",
          "options": [
            {
              "l": "a",
              "t": "1/7"
            },
            {
              "l": "b",
              "t": "1/6"
            },
            {
              "l": "c",
              "t": "1/5"
            },
            {
              "l": "d",
              "t": "None of the other three answers is correct."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "M = m × MB = 4 × 10,000 = 40,000 = C + D, so D = 35,000. Reserves R = (r + e) × D, so r + e = 5,000 / 35,000 = 1/7. Check: c = 1/7 and m = (1 + 1/7)/(1/7 + 1/7) = 4.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Representative questions Q11 · also in: Old-exam pool #135"
        },
        {
          "num": "RQ-12",
          "qid": "RQ-12",
          "stem": "The next question deals with the relation between the M1-money multiplier, m1, and the M2-money multiplier, m2. Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The M2-money multiplier, m2, is defined as m2 = (1 + c + e) / (r + t + c), where c is the currency ratio, e is the excess reserve ratio, r is the required reserve ratio and t is the ratio of time deposits over demand or sight (i.e. overnight) deposits."
            },
            {
              "l": "b",
              "t": "The M2-money multiplier is smaller than the M1-money multiplier provided that the currency ratio (c) is smaller than the required reserve ratio (r)."
            },
            {
              "l": "c",
              "t": "The M2-money multiplier is larger than the M1-money multiplier only if we assume that the amount of time deposits is smaller than the amount of demand or sight (i.e. overnight) deposits."
            },
            {
              "l": "d",
              "t": "The M2-money multiplier is larger than the M1-money multiplier if the amount of time deposits is larger than 0."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "With t = T/D, the M2 multiplier is m2 = (1 + c + t)/(r + e + c), while m1 = (1 + c)/(r + e + c). The denominators are the same, so m2 > m1 as soon as t > 0, i.e. as soon as there are any time deposits. Option (a) puts t in the wrong place.",
          "source": "Lecture 9 / Lecture 12; Mishkin ch. 15 (M2 multiplier)",
          "origin": "Representative questions Q12 · also in: Old-exam pool #136"
        },
        {
          "num": "F25-10",
          "qid": "F25-10",
          "stem": "Assume that demand deposits (D) are at 10,000 and that the currency ratio (c) is at 20 percent. The money supply M = M1 then is at",
          "options": [
            {
              "l": "a",
              "t": "10,000/1.2"
            },
            {
              "l": "b",
              "t": "12,000"
            },
            {
              "l": "c",
              "t": "50,000"
            },
            {
              "l": "d",
              "t": "a level that cannot be calculated on the basis of the above information"
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "M1 = C + D = c × D + D = 0.2 × 10,000 + 10,000 = 12,000.",
          "source": "Lecture 9",
          "origin": "Final exam Oct 2025 Q10 · also in: Old-exam pool #60"
        },
        {
          "num": "F25-11",
          "qid": "F25-11",
          "stem": "The ECB sells government bonds of €10,000,000 to the bank ABD. Before this sale, bank ABD had deposits of €100,000,000 and held reserves of €15,000,000 with the required reserve ratio being at 2%. What is the maximum amount of loans that bank ABD can give after its purchase of government bonds from the ECB has been booked? Assume that nothing else changes, i.e. ceteris paribus.",
          "options": [
            {
              "l": "a",
              "t": "€19,800,000"
            },
            {
              "l": "b",
              "t": "€20,000,000"
            },
            {
              "l": "c",
              "t": "€23,000,000"
            },
            {
              "l": "d",
              "t": "none of the other three answers is correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Bank ABD pays for the bonds with reserves: reserves fall from 15m to 5m, deposits stay at 100m. Required reserves = 2 % × 100m = 2m, so excess reserves = 3m, which is the maximum new lending. 3m is not among (a)–(c).",
          "source": "Lecture 9, open market operations; Lecture 5 liquidity management",
          "origin": "Final exam Oct 2025 Q11 · also in: Old-exam pool #152"
        },
        {
          "num": "F25-12",
          "qid": "F25-12",
          "stem": "The banking system of country DEF is characterised by the following statistics. The amount of deposits is at 1,000, the currency ratio is at 20 percent, the excess reserves amount to 200 and the money multiplier is at 2. The required reserve ratio then is",
          "options": [
            {
              "l": "a",
              "t": "10 percent."
            },
            {
              "l": "b",
              "t": "20 percent."
            },
            {
              "l": "c",
              "t": "25 percent."
            },
            {
              "l": "d",
              "t": "impossible to determine on the basis of the information that is given."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "e = ER/D = 200/1,000 = 0.2 and c = 0.2. From m = (1 + c)/(r + e + c): 2 = 1.2/(r + 0.4), so r + 0.4 = 0.6 and r = 0.2 = 20 %.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Final exam Oct 2025 Q12 · also in: Exam Jan 2023 Q16, Final exam 2020 Q9, Old-exam pool #153"
        },
        {
          "num": "J23-15",
          "qid": "J23-15",
          "stem": "Assume that the money supply M = M1 is at 50,000, that the amount of currency in circulation (C) is at 2,000, that the amount of required reserves (RR) is at 18,000 and that the money multiplier is at 2.5. The amount of excess reserves (ER) then",
          "options": [
            {
              "l": "a",
              "t": "is at 0."
            },
            {
              "l": "b",
              "t": "is at 1,000."
            },
            {
              "l": "c",
              "t": "is at 2,000."
            },
            {
              "l": "d",
              "t": "cannot be determined on the basis of the above information."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "M1 = C + D gives D = 50,000 − 2,000 = 48,000. MB = M/m = 50,000/2.5 = 20,000 = C + R, so R = 18,000. With RR = 18,000, ER = R − RR = 0.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Exam Jan 2023 Q15 · also in: Old-exam pool #255"
        },
        {
          "num": "R21-12",
          "qid": "R21-12",
          "stem": "A deposit withdrawal by the non-bank public",
          "options": [
            {
              "l": "a",
              "t": "increases reserves, decreases currency in circulation and decreases the amount of high-powered money."
            },
            {
              "l": "b",
              "t": "has no effect on the size of the balance sheet of the non-bank public, but decreases the size of the balance sheets of the commercial banks and of the central bank."
            },
            {
              "l": "c",
              "t": "alters the composition of the monetary base but keeps the amount of high-powered money constant."
            },
            {
              "l": "d",
              "t": "reduces the size of the balance sheet of the non-bank public as well as that of the central bank, but leaves the size of the balance sheet of the commercial banks unchanged."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A withdrawal turns deposits into currency: R falls and C rises by the same amount, so MB = C + R stays the same and only its composition changes. Banks' balance sheets shrink, the public just swaps assets, and the central bank's balance sheet total is unchanged.",
          "source": "Lecture 9, 'Currency and/or deposit withdrawals'",
          "origin": "Resit exam 2021 Q12 · also in: Old-exam pool #268"
        },
        {
          "num": "R21-13",
          "qid": "R21-13",
          "stem": "Assume that the required reserve ratio is at 10 percent, that the excess reserve ratio is at 20 percent and that the currency ratio is at 20 percent. In the money multiplier model, an amount of €1000 million for the monetary base then implies deposits of",
          "options": [
            {
              "l": "a",
              "t": "€1800 million."
            },
            {
              "l": "b",
              "t": "€2000 million."
            },
            {
              "l": "c",
              "t": "€2200 million."
            },
            {
              "l": "d",
              "t": "€2400 million."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "D = MB / (r + e + c) = 1,000 / (0.1 + 0.2 + 0.2) = 2,000. (M1 would be m × MB = 2.4 × 1,000 = 2,400.)",
          "source": "Lecture 9, money multiplier model",
          "origin": "Resit exam 2021 Q13 · also in: Old-exam pool #269"
        },
        {
          "num": "F20-7",
          "qid": "F20-7",
          "stem": "Assume that checkable deposits (D) are at 10000 and that the currency ratio (c) is at 20 percent. The money supply M = M2 then is at",
          "options": [
            {
              "l": "a",
              "t": "10000/1.2"
            },
            {
              "l": "b",
              "t": "12000"
            },
            {
              "l": "c",
              "t": "50000"
            },
            {
              "l": "d",
              "t": "a level that cannot be calculated on the basis of the above information."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "D and c only give M1 = (1 + c) × D = 12,000. M2 also includes savings and time deposits, and we have no information on those.",
          "source": "Lecture 9, 'Measuring money'",
          "origin": "Final exam 2020 Q7"
        },
        {
          "num": "F20-8",
          "qid": "F20-8",
          "stem": "Assume that the central bank buys €1,000,000 in government bonds from the banking sector. At the same time, the central bank increases the required reserve ratio from 1 percent to 4 percent. According to the simple model, this means that the money supply M1 after the increase of the required reserve ratio will increase by ________ rather than by _________ as in the original situation, i.e. the situation with the lower required reserve ratio.",
          "options": [
            {
              "l": "a",
              "t": "€25,000,000; €100,000,000."
            },
            {
              "l": "b",
              "t": "€100,000,000; €25,000,000."
            },
            {
              "l": "c",
              "t": "€4,000,000; €1,000,000."
            },
            {
              "l": "d",
              "t": "This question cannot be answered as we do not have information on the level of the deposits."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "respectively",
          "explanation": "Simple model: ΔD = ΔR / r. With r = 4 %: 1,000,000 / 0.04 = €25 million. With r = 1 %: 1,000,000 / 0.01 = €100 million.",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Final exam 2020 Q8"
        },
        {
          "num": "P-15",
          "qid": "P-15",
          "stem": "The ECB sells €10,000,000 in government bonds to the bank ACDC. Suppose that bank ACDC has deposits of €100,000,000 and holds reserves of €15,000,000 with the required reserve ratio being at 5 percent. What is the maximum amount of loans that bank ACDC can give immediately after its purchase of government bonds from the ECB has been booked?",
          "options": [
            {
              "l": "a",
              "t": "€9,500,000"
            },
            {
              "l": "b",
              "t": "€10,000,000"
            },
            {
              "l": "c",
              "t": "€14,250,000"
            },
            {
              "l": "d",
              "t": "none of the other three answers is correct"
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "ACDC pays for the bonds with reserves: 15m becomes 5m, while deposits stay at 100m. Required reserves = 5 % × 100m = 5m, so excess reserves are 0 and the bank cannot lend anything. That is not among (a)–(c).",
          "source": "Lecture 9, open market operations",
          "origin": "Old-exam pool #15"
        },
        {
          "num": "P-16",
          "qid": "P-16",
          "stem": "The impact of the central bank upon the money supply process crucially depends on the so-called money multiplier. You have to examine the validity of the following four statements assuming that nothing else changes (i.e. ceteris paribus). Which of the following statements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The level of the money multiplier is completely determined by the central bank."
            },
            {
              "l": "b",
              "t": "The money multiplier is defined as the money supply divided by the monetary base."
            },
            {
              "l": "c",
              "t": "The money multiplier typically is larger than the simple deposit multiplier."
            },
            {
              "l": "d",
              "t": "The level of the money multiplier increases when the excess reserves ratio increases."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "m = M / MB by definition. (a) c and e depend on the public and on banks; (c) m < 1/r because of currency and excess reserves; (d) a higher e lowers m.",
          "source": "Lecture 9, money multiplier model",
          "origin": "Old-exam pool #16"
        },
        {
          "num": "P-61",
          "qid": "P-61",
          "stem": "We know that the banking sector holds required reserves of €20 million, that the deposits on the liabilities side of the balance sheet of the banking sector amount to €200 million and that the banking sector holds €20 million in government bonds. Assume that the central bank buys government bonds for a total of €3 million from the banking sector. What will be the change in deposits that is caused by these purchases of government bonds within the simple deposit creation model (“the simple model”)?",
          "options": [
            {
              "l": "a",
              "t": "Deposits decrease by €3 million."
            },
            {
              "l": "b",
              "t": "Deposits increase by €3 million."
            },
            {
              "l": "c",
              "t": "Deposits increase by €30 million but only if e is at 0.1 and c is at 0.2."
            },
            {
              "l": "d",
              "t": "Deposits increase by €30 million."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Simple model: r = RR/D = 20/200 = 0.10, so the deposit multiplier is 10. A €3 million purchase adds €3 million in reserves, so ΔD = 3 / 0.10 = €30 million. Option (c) is wrong because e and c play no role in the simple model.",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Old-exam pool #61"
        },
        {
          "num": "P-62",
          "qid": "P-62",
          "stem": "A wave of recent bank robberies in country ABC has terrified deposit holders. In fact, deposit holders decide to hold more cash. Assume that the banks in country ABC use part of their reserves for giving loans. Everything else held constant (i.e., ceteris paribus), this decision of deposit holders to hold more cash",
          "options": [
            {
              "l": "a",
              "t": "decreases M1 but not M2."
            },
            {
              "l": "b",
              "t": "decreases the amount of high-powered money."
            },
            {
              "l": "c",
              "t": "decreases M1."
            },
            {
              "l": "d",
              "t": "decreases the simple deposit multiplier."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Holding more cash raises c, which lowers the money multiplier and therefore M1. The monetary base only changes composition, and the simple deposit multiplier 1/r is unaffected. M2 falls too, so (a) is wrong.",
          "source": "Lecture 9, factors affecting M1",
          "origin": "Old-exam pool #62"
        },
        {
          "num": "P-213",
          "qid": "P-213",
          "stem": "High-powered money minus reserves equals",
          "options": [
            {
              "l": "a",
              "t": "deposits."
            },
            {
              "l": "b",
              "t": "currency in circulation."
            },
            {
              "l": "c",
              "t": "the monetary base."
            },
            {
              "l": "d",
              "t": "the non-borrowed base."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "MB = C + R, so MB − R = C, currency in circulation.",
          "source": "Lecture 9, the central bank's balance sheet",
          "origin": "Old-exam pool #213"
        },
        {
          "num": "P-214",
          "qid": "P-214",
          "stem": "We know that the banking sector in country X holds required reserves of €25 billion, €500 billions of loans and €55 billion of government bonds. The total amount of deposits of the banking sector amounts to €500 billion and bank capital is at €80 billion. Assume that the central bank of country X buys government bonds for a total of €10 million from the banking sector. What will be the change in the deposits that is created by the latter operation according to the simple deposit creation model (“the simple model”)?",
          "options": [
            {
              "l": "a",
              "t": "Deposits decrease by €100 million."
            },
            {
              "l": "b",
              "t": "Deposits increase by €100 million."
            },
            {
              "l": "c",
              "t": "Deposits increase by €160 million."
            },
            {
              "l": "d",
              "t": "The correct amount is not specified in the answers 1, 2 and 3."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "'Answers 1, 2 and 3' refers to options a, b and c.",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Simple model: r = 25/500 = 5 %, so the deposit multiplier is 20. A purchase of €10 million adds €10 million in reserves, so ΔD = 10 × 20 = €200 million. That is not among (a)–(c).",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Old-exam pool #214"
        },
        {
          "num": "P-245",
          "qid": "P-245",
          "stem": "We know that the banking sector holds required reserves of €10 million. You also know that the deposits that are on the liabilities side of the banking sector are at €200 million. Assume that the central bank sells government bonds for a total of €1,000 to the banking sector. What will be the ultimate change in the amount of deposits that is caused by the latter operation according to the simple deposit creation model (“the simple model”)?",
          "options": [
            {
              "l": "a",
              "t": "Deposits decrease by €10,000."
            },
            {
              "l": "b",
              "t": "Deposits increase by €10,000."
            },
            {
              "l": "c",
              "t": "Deposits decrease by €20,000."
            },
            {
              "l": "d",
              "t": "Deposits increase by €20,000."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "r = 10/200 = 5 %, so the deposit multiplier is 20. A sale of €1,000 removes €1,000 of reserves, so ΔD = −1,000 × 20 = −€20,000.",
          "source": "Lecture 9, simple deposit multiplier",
          "origin": "Old-exam pool #245"
        },
        {
          "num": "P-246",
          "qid": "P-246",
          "stem": "Suppose that MB = 500, e = 0.1, c = 0.2 and r = 0.1. This economy then has a money supply M2 that is equal to",
          "options": [
            {
              "l": "a",
              "t": "550."
            },
            {
              "l": "b",
              "t": "1,500."
            },
            {
              "l": "c",
              "t": "5,000."
            },
            {
              "l": "d",
              "t": "an amount that we cannot calculate on the basis of the above information."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "calc",
          "fmt": "single",
          "explanation": "MB, r, e and c give M1 = (1.2/0.4) × 500 = 1,500, but M2 also needs the time and savings deposit ratio, which is not given.",
          "source": "Lecture 9 / Lecture 12 (M2 multiplier)",
          "origin": "Old-exam pool #246"
        },
        {
          "num": "P-247",
          "qid": "P-247",
          "stem": "Central banks desire to be closely informed about the number of Automated Teller Machines (ATM), i.e. cash dispensers or cash machines. In fact, a larger number of ATM (everything else held constant, i.e. ceteris paribus) immediately increases",
          "options": [
            {
              "l": "a",
              "t": "the inverse of the deposit multiplier."
            },
            {
              "l": "b",
              "t": "excess reserves."
            },
            {
              "l": "c",
              "t": "the currency ratio."
            },
            {
              "l": "d",
              "t": "the inverse of the currency ratio."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l9",
          "kind": "concept",
          "fmt": "single",
          "explanation": "With more cash machines, people can get cash whenever they need it, so they hold less currency relative to deposits. The currency ratio c falls, so its inverse 1/c rises.",
          "source": "Lecture 9, currency ratio; Mishkin ch. 15",
          "origin": "Old-exam pool #247"
        }
      ]
    },
    {
      "id": "t_l10",
      "label": "L10 – Monetary Policy",
      "source": "Old final exams + question pool, no duplicates",
      "questions": [
        {
          "num": "RQ-4",
          "qid": "RQ-4",
          "stem": "The course discussed several nonconventional central bank policies. One of them is known as “management of expectations”. Which of the following statements is correctly describing “management of expectations”?",
          "options": [
            {
              "l": "a",
              "t": "The Fed announced that it would continue to sell massive amounts of corporate and government bonds in order to keep interest rates low."
            },
            {
              "l": "b",
              "t": "The Fed announced that it would guarantee bank lending to corporations against default risk."
            },
            {
              "l": "c",
              "t": "The Fed announced that it would maintain low nominal interest rates for an extended period of time in order to decrease inflation expectations and decrease real interest rates."
            },
            {
              "l": "d",
              "t": "The Fed used “management of expectations” in order to decrease long-term nominal interest rates, raise inflation expectations and reduce real interest rates."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Forward guidance (management of expectations): the Fed commits to keep short rates low for a long time. Via the expectations / liquidity premium theory this lowers long-term nominal rates, and by raising inflation expectations it pushes real rates down further. Option (c) has the inflation-expectations effect backwards; (a) says 'sell' instead of 'buy'.",
          "source": "Lecture 10, 'Nonconventional tools of monetary policy'",
          "origin": "Representative questions Q4 · also in: Old-exam pool #128"
        },
        {
          "num": "RQ-13",
          "qid": "RQ-13",
          "stem": "Which of the following four statements is NOT correct? The interbank overnight interest rate in the euro area",
          "options": [
            {
              "l": "a",
              "t": "is called the €STR."
            },
            {
              "l": "b",
              "t": "can be larger than the deposit rate."
            },
            {
              "l": "c",
              "t": "can be influenced by actions of commercial banks."
            },
            {
              "l": "d",
              "t": "can be larger than the Marginal Lending Rate (MLR) + 100 basis points."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The marginal lending rate is the ceiling of the corridor: no bank pays more than the MLR in the interbank market when it can borrow from the ECB at the MLR. So €STR cannot exceed the MLR, let alone MLR + 100 bp. It can lie above the deposit rate (inside the corridor), and banks' demand for reserves does move it.",
          "source": "Lecture 10, 'Standing facilities at the ECB' and the market for reserves",
          "origin": "Representative questions Q13 · also in: Old-exam pool #137"
        },
        {
          "num": "RQ-14",
          "qid": "RQ-14",
          "stem": "The Securities Markets Programme (SMP) was controversial because",
          "options": [
            {
              "l": "a",
              "t": "the ECB promised to give direct credits to the governments of the euro area countries."
            },
            {
              "l": "b",
              "t": "it led to an increase in the amount of reserves in financial markets in the euro area."
            },
            {
              "l": "c",
              "t": "it led the ECB to buy government bonds in the primary market."
            },
            {
              "l": "d",
              "t": "of reasons that are different from the ones that are mentioned in the other three answers."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The SMP bought Italian and Spanish government bonds on the secondary market (no primary-market purchases, no direct credit to governments), and the extra reserves were sterilised. So (a), (b) and (c) describe things the SMP did not do, and the answer is (d).",
          "source": "Lecture 10, 'Securities Markets Programme (SMP, 2010-2012)'",
          "origin": "Representative questions Q14 · also in: Old-exam pool #138"
        },
        {
          "num": "RQ-15",
          "qid": "RQ-15",
          "stem": "Assume that the market for reserves is in equilibrium and that this equilibrium is characterised by a zero amount of borrowed reserves. A decrease in the ECB’s marginal lending rate, everything else held constant, i.e. ceteris paribus, then cannot change the ________ and the ________.",
          "options": [
            {
              "l": "a",
              "t": "amount of non-borrowed reserves; deposit rate"
            },
            {
              "l": "b",
              "t": "amount of borrowed reserves; currency ratio"
            },
            {
              "l": "c",
              "t": "amount of reserves that commercial banks create; simple deposit multiplier"
            },
            {
              "l": "d",
              "t": "amount of borrowed OMO; amount of non-borrowed reserves"
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "With zero borrowed reserves the equilibrium lies on the vertical part of the supply curve, below the lending rate. A lower marginal lending rate leaves non-borrowed reserves (set by OMOs) and the deposit rate (a separate tool) unchanged. Borrowed reserves can change once the MLR is cut below the market rate.",
          "source": "Lecture 10, market for reserves: response of i to changes in the lending rate",
          "origin": "Representative questions Q15 · also in: Old-exam pool #139"
        },
        {
          "num": "RQ-16",
          "qid": "RQ-16",
          "stem": "Price stability in the mandate of the European System of Central Banks is",
          "options": [
            {
              "l": "a",
              "t": "defined as “…a year-on-year increase in the Harmonized Index of Producer Prices (HIPP) for the euro area of 2%”."
            },
            {
              "l": "b",
              "t": "given a numerical value by the Board of Governors."
            },
            {
              "l": "c",
              "t": "not to be achieved by the European Systemic Risk Board."
            },
            {
              "l": "d",
              "t": "to be implemented in a decentralized manner by the national bank supervisors."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ECB itself (Governing Council) defines price stability as 2 % HICP (consumer, not producer prices) over the medium term. 'Board of Governors' is a Fed body, and implementation is through the national central banks, not bank supervisors. The ESRB is the EU's macroprudential body and has no price-stability task.",
          "source": "Lecture 10, 'Inflation targeting at the ECB'; Lecture 11 (ESRB)",
          "origin": "Representative questions Q16 · also in: Final exam 2020 Q15, Old-exam pool #140"
        },
        {
          "num": "RQ-17",
          "qid": "RQ-17",
          "stem": "Use the Taylor rule in the specification that was used in the lectures. Assume that you receive the following information: the equilibrium real interest rate is at 2 percent, the output gap is at 1 percent, the inflation target is at 1 percent and the actual inflation rate is at 3 percent. The nominal interest rate target that is to be set by the central bank according to the Taylor rule then is at",
          "options": [
            {
              "l": "a",
              "t": "4.5 percent."
            },
            {
              "l": "b",
              "t": "5.5 percent."
            },
            {
              "l": "c",
              "t": "6 percent."
            },
            {
              "l": "d",
              "t": "6.5 percent."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Taylor rule: i = π + r* + 0.5(π − π*) + 0.5 × output gap = 3 + 2 + 0.5 × (3 − 1) + 0.5 × 1 = 6.5 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Representative questions Q17 · also in: Old-exam pool #141"
        },
        {
          "num": "F25-17",
          "qid": "F25-17",
          "stem": "Suppose that you read the following statement: “The overnight interbank interest rate in the market for reserves is below the ECB’s deposit interest rate.” This statement",
          "options": [
            {
              "l": "a",
              "t": "implies that the deposit interest rate will have to increase."
            },
            {
              "l": "b",
              "t": "implies that the overnight interbank interest rate will need to decrease further."
            },
            {
              "l": "c",
              "t": "implies that the lending rate of the ECB will have to decrease."
            },
            {
              "l": "d",
              "t": "does not make sense."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The deposit rate is the floor of the corridor: no bank lends reserves overnight below the rate it can earn by depositing them at the ECB. So an overnight rate below the deposit rate cannot occur, and the statement does not make sense.",
          "source": "Lecture 10, demand for reserves and standing facilities",
          "origin": "Final exam Oct 2025 Q17 · also in: Final exam 2020 Q14, Old-exam pool #157"
        },
        {
          "num": "F25-18",
          "qid": "F25-18",
          "stem": "Which of the following is not a disadvantage of the Fed's approach to monetary policy?",
          "options": [
            {
              "l": "a",
              "t": "There is low transparency in monetary policy."
            },
            {
              "l": "b",
              "t": "There is low accountability for central bankers."
            },
            {
              "l": "c",
              "t": "This type of policy relies on the preferences of the policymakers in charge."
            },
            {
              "l": "d",
              "t": "It relies on a stable money-inflation relationship."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Relying on a stable money–inflation relationship is a drawback of monetary targeting. The Fed's implicit nominal anchor (dual mandate) is criticised for low transparency, low accountability and dependence on the people in charge.",
          "source": "Lecture 10, 'Implicit nominal anchor' and 'Monetary targeting'",
          "origin": "Final exam Oct 2025 Q18 · also in: Old-exam pool #158, Old-exam pool #202"
        },
        {
          "num": "F25-19",
          "qid": "F25-19",
          "stem": "Which of the following is not an element of inflation targeting?",
          "options": [
            {
              "l": "a",
              "t": "A public announcement of a medium-term numerical target for the inflation rate."
            },
            {
              "l": "b",
              "t": "An institutional commitment to price stability as the primary long-run goal."
            },
            {
              "l": "c",
              "t": "An information approach in which only monetary aggregates are claimed to be central to making decisions on policy interest rates."
            },
            {
              "l": "d",
              "t": "Increased accountability of the central bank for attaining its inflation objectives."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Inflation targeting uses an information-inclusive approach in which many variables, not just monetary aggregates, feed into policy-rate decisions. The other three are elements of inflation targeting.",
          "source": "Lecture 10, 'Inflation targeting'",
          "origin": "Final exam Oct 2025 Q19 · also in: Old-exam pool #159"
        },
        {
          "num": "F25-20",
          "qid": "F25-20",
          "stem": "Use the Taylor rule as it was described in the lectures. Assume that you receive the following information: the equilibrium real interest rate is at 1 percent, the output gap is at 1 percent, the inflation rate is at 3 percent and the nominal interest rate target of the central bank is at 5.5 percent. We then know that",
          "options": [
            {
              "l": "a",
              "t": "the inflation target is at 0 percent."
            },
            {
              "l": "b",
              "t": "the inflation target is at 0.5 percent."
            },
            {
              "l": "c",
              "t": "the inflation target is at 1 percent."
            },
            {
              "l": "d",
              "t": "the inflation target is at a level that is different from the levels that are specified in the other answers."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "5.5 = π + r* + 0.5(π − π*) + 0.5 × gap = 3 + 1 + 0.5(3 − π*) + 0.5. So 0.5(3 − π*) = 1, which gives π* = 1 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Final exam Oct 2025 Q20 · also in: Exam Jan 2023 Q20, Old-exam pool #70, Old-exam pool #160"
        },
        {
          "num": "J23-19",
          "qid": "J23-19",
          "stem": "If the central bank targets a monetary aggregate, it will lose control over the interest rate because",
          "options": [
            {
              "l": "a",
              "t": "of fluctuations in the demand for reserves."
            },
            {
              "l": "b",
              "t": "of fluctuations in the non-borrowed reserves."
            },
            {
              "l": "c",
              "t": "bond prices have the tendency to remain stable."
            },
            {
              "l": "d",
              "t": "targeting monetary aggregates is incompatible with achieving price stability."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "If the central bank fixes the quantity of reserves (or a monetary aggregate), every shift in the demand for reserves changes the interest rate. You cannot target a quantity and the interest rate at the same time.",
          "source": "Lecture 10, 'Tactics: choosing the policy instrument'",
          "origin": "Exam Jan 2023 Q19 · also in: Old-exam pool #200"
        },
        {
          "num": "R21-16",
          "qid": "R21-16",
          "stem": "In the so-called market for reserves, we see the interplay of the demand for and the supply of reserves. You have to analyse the validity of the following seven statements.\nA. The supply curve of reserves is completely vertical since the central bank autonomously decides on the quantity of reserves.\nB. The overnight interbank interest rate cannot equal the lending rate without leading to arbitrage operations by the banking sector.\nC. The 7-day interest rate is determined by the intersection between supply and demand on the market for reserves.\nD. The so-called deposit rate always has to equal the overnight interbank interest rate.\nE. An increase in the overnight interbank interest rate above the lending rate indicates that banks lack trust with respect to each other.\nF. The demand for reserves initially is downward-sloping but becomes upward-sloping for a large enough quantity of reserves.\nG. OMOs increase the required reserve ratio.\n\nHow many of the above seven statements are not correct?",
          "options": [
            {
              "l": "a",
              "t": "four of the above statements are not correct."
            },
            {
              "l": "b",
              "t": "five of the above statements are not correct."
            },
            {
              "l": "c",
              "t": "six of the above statements are not correct."
            },
            {
              "l": "d",
              "t": "seven of the above statements are not correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "All seven statements are wrong. A: supply is vertical only up to the lending rate, then horizontal. B: i can equal il; arbitrage would only arise if i > il. C: the market sets the overnight rate. D: the deposit rate is only the floor. E: i cannot rise above the lending rate. F: demand becomes flat at the deposit rate, never upward-sloping. G: OMOs change non-borrowed reserves, not the required reserve ratio.",
          "source": "Lecture 10, market for reserves",
          "origin": "Resit exam 2021 Q16"
        },
        {
          "num": "R21-17",
          "qid": "R21-17",
          "stem": "Use the Taylor rule as it was described in the lectures. When the equilibrium real interest rate is at 3 percent, the positive output gap is at 2 percent, the target inflation rate is at 1 percent, and the actual inflation rate is at 2 percent, the nominal interest rate target set by the central bank should be at",
          "options": [
            {
              "l": "a",
              "t": "4.5 percent."
            },
            {
              "l": "b",
              "t": "5.5 percent."
            },
            {
              "l": "c",
              "t": "6 percent."
            },
            {
              "l": "d",
              "t": "6.5 percent."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "i = π + r* + 0.5(π − π*) + 0.5 × gap = 2 + 3 + 0.5 × 1 + 0.5 × 2 = 6.5 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Resit exam 2021 Q17"
        },
        {
          "num": "F20-16",
          "qid": "F20-16",
          "stem": "If the central bank targets a reserve aggregate, it is likely to lose control over _________ because _________ (everything else held constant in the market for reserves).",
          "options": [
            {
              "l": "a",
              "t": "the interest rate; of fluctuations in the demand for reserves"
            },
            {
              "l": "b",
              "t": "the required reserve ratio; of changes in the excess reserves"
            },
            {
              "l": "c",
              "t": "the lending rate; bond prices are inversely related to interest rates"
            },
            {
              "l": "d",
              "t": "the interest rate; of fluctuations in the business cycle over the medium-term"
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "With a fixed quantity of reserves, shifts in the demand for reserves move the interest rate. A central bank cannot target a reserve aggregate and the interest rate at the same time.",
          "source": "Lecture 10, 'Tactics: choosing the policy instrument'",
          "origin": "Final exam 2020 Q16"
        },
        {
          "num": "F20-17",
          "qid": "F20-17",
          "stem": "Use the Taylor rule as it was described in the lectures. Assume that the following holds: the equilibrium real interest rate is at 1 percent, the output gap is at 1 percent, the inflation target is at 2 percent and the nominal interest rate target of the central bank is at 3.5 percent. We then know that",
          "options": [
            {
              "l": "a",
              "t": "the inflation rate is at 1 percent."
            },
            {
              "l": "b",
              "t": "the inflation rate is at 1.5 percent."
            },
            {
              "l": "c",
              "t": "the inflation rate is at 2 percent."
            },
            {
              "l": "d",
              "t": "the inflation rate cannot be calculated via the above information."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "3.5 = π + 1 + 0.5(π − 2) + 0.5 × 1 = 1.5π + 0.5, so π = 2 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Final exam 2020 Q17"
        },
        {
          "num": "P-20",
          "qid": "P-20",
          "stem": "Amongst the tools of monetary policy, we find the so-called standing facilities. These standing facilities refer to",
          "options": [
            {
              "l": "a",
              "t": "the arrangements that central banks have with private banks concerning buying and selling of government bonds."
            },
            {
              "l": "b",
              "t": "the way the central bank can directly control the amount of required reserves that private banks hold."
            },
            {
              "l": "c",
              "t": "the system of interest rates that central banks set and at which banks can borrow and deposit reserves at the central bank."
            },
            {
              "l": "d",
              "t": "the credit lines that governments have at the central bank."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Standing facilities are the deposit facility (deposit rate) and the marginal lending facility (lending rate). Together they form the corridor for the overnight rate.",
          "source": "Lecture 10, 'Conventional tools of monetary policy'",
          "origin": "Old-exam pool #20"
        },
        {
          "num": "P-63",
          "qid": "P-63",
          "stem": "The time-inconsistency problem in monetary policy tells us that if policymakers use discretionary policy, there is a ________ probability that ________ will be higher when compared with policy makers that follow a behaviour rule.",
          "options": [
            {
              "l": "a",
              "t": "higher; the inflation rate"
            },
            {
              "l": "b",
              "t": "lower; the inflation rate"
            },
            {
              "l": "c",
              "t": "higher; the maturity mismatch"
            },
            {
              "l": "d",
              "t": "lower; asymmetric information"
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "With discretion, agents expect short-run stimulus, raise their inflation expectations, and inflation ends up higher without extra growth. A credible behaviour rule (nominal anchor) prevents this.",
          "source": "Lecture 8, time-inconsistency problem; Lecture 10, 'Behaviour rule and nominal anchor'",
          "origin": "Old-exam pool #63"
        },
        {
          "num": "P-67",
          "qid": "P-67",
          "stem": "In the so-called market for reserves, we see the interplay of the demand for and the supply of reserves. You have to analyse the validity of the following statements.\nA. The supply curve of reserves is completely vertical since the central bank autonomously decides about the quantity of reserves.\nB. The overnight interbank interest rate cannot equal the lending rate without leading to arbitrage operations by the banking sector.\nC. The demand for reserves initially is downward-sloping but becomes upward-sloping for a large enough quantity of reserves.\nD. OMOs increase the borrowed reserves.\n\nHow many of the above statements are not correct?",
          "options": [
            {
              "l": "a",
              "t": "one of the above statements is not correct."
            },
            {
              "l": "b",
              "t": "two of the above statements are not correct."
            },
            {
              "l": "c",
              "t": "three of the above statements are not correct."
            },
            {
              "l": "d",
              "t": "four of the above statements are not correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "howmany",
          "explanation": "A: supply is horizontal at the lending rate, not completely vertical. B: i can equal il; arbitrage needs i > il. C: demand becomes flat at the deposit rate, not upward-sloping. D: OMOs change non-borrowed reserves. All four are wrong.",
          "source": "Lecture 10, market for reserves",
          "origin": "Old-exam pool #67"
        },
        {
          "num": "P-68",
          "qid": "P-68",
          "stem": "Central banks currently argue that either a dual or hierarchical mandate is acceptable as long as ________ is the primary goal in the ________.",
          "options": [
            {
              "l": "a",
              "t": "interest rate stability; short run."
            },
            {
              "l": "b",
              "t": "price stability; long run."
            },
            {
              "l": "c",
              "t": "reducing business-cycle fluctuations; short run."
            },
            {
              "l": "d",
              "t": "maximising output; long run."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "A dual mandate (Fed) or a hierarchical mandate (ECB) is acceptable as long as price stability is the primary goal in the long run. There is no long-run trade-off between price stability and the other goals.",
          "source": "Lecture 8 (price stability as primary goal); Lecture 10 (dual vs hierarchical mandate)",
          "origin": "Old-exam pool #68"
        },
        {
          "num": "P-69",
          "qid": "P-69",
          "stem": "The Transmission Protection Instrument (TPI)",
          "options": [
            {
              "l": "a",
              "t": "would allow the ECB in exceptional times to buy government bonds in the primary market."
            },
            {
              "l": "b",
              "t": "intends to increase yields of government bonds in order to increase the revenues of commercial banks."
            },
            {
              "l": "c",
              "t": "would imply an increase in reserves in contrast to QE where reserves decrease."
            },
            {
              "l": "d",
              "t": "does not have the same effects on reserves when compared with QE."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "TPI purchases are sterilised, so unlike QE they do not raise reserves. (a) Only secondary-market purchases are allowed; (b) the aim is to counter unwarranted rises in yields; (c) QE increases reserves, it does not lower them.",
          "source": "Lecture 10, 'Transmission Protection Instrument (TPI, 2022-)'",
          "origin": "Old-exam pool #69"
        },
        {
          "num": "P-198",
          "qid": "P-198",
          "stem": "Which of the following actions of the central bank would be supported by the Taylor rule?",
          "options": [
            {
              "l": "a",
              "t": "When real GDP is below its potential level, the central bank should increase the interest rate."
            },
            {
              "l": "b",
              "t": "When real GDP is below its potential level, the central bank should increase its lending rate."
            },
            {
              "l": "c",
              "t": "When real GDP is below its potential level, the central bank should decrease the deposit rate if the interbank overnight interest rate is below the deposit rate."
            },
            {
              "l": "d",
              "t": "None of the answers 1, 2 and 3 is correct."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "'Answers 1, 2 and 3' refers to options a, b and c.",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "If real GDP is below potential (negative output gap), the Taylor rule calls for a lower interest rate, so (a) and (b) are wrong. (c) is nonsense, because the overnight rate cannot be below the deposit rate.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Old-exam pool #198"
        },
        {
          "num": "P-199",
          "qid": "P-199",
          "stem": "The Fed and the ECB use three conventional policy tools to manipulate the money supply: open market operations, which primarily affect the ________; changes in borrowed reserves, which primarily affect the ________; and changes in reserve requirements, which primarily affect the ________.",
          "options": [
            {
              "l": "a",
              "t": "money multiplier; monetary base; monetary base"
            },
            {
              "l": "b",
              "t": "monetary base; money multiplier; monetary base"
            },
            {
              "l": "c",
              "t": "money multiplier; money multiplier; monetary base"
            },
            {
              "l": "d",
              "t": "None of the answers 1, 2 and 3 is correct"
            }
          ],
          "correct": [
            "d"
          ],
          "note": "'Answers 1, 2 and 3' refers to options a, b and c.",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "OMOs change the (non-borrowed) monetary base. Lending to banks changes borrowed reserves and so also the monetary base. Reserve requirements change the money multiplier. The right pattern is 'monetary base; monetary base; money multiplier', which is not among (a)–(c).",
          "source": "Lecture 9 (control of the monetary base); Lecture 10 (tools)",
          "origin": "Old-exam pool #199"
        },
        {
          "num": "P-201",
          "qid": "P-201",
          "stem": "Everything else held constant, when the EONIA is ________ the ECB’s deposit rate, the demand for reserves rises when the EONIA ________.",
          "options": [
            {
              "l": "a",
              "t": "below; rises."
            },
            {
              "l": "b",
              "t": "below; falls."
            },
            {
              "l": "c",
              "t": "above; rises."
            },
            {
              "l": "d",
              "t": "above; falls."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "EONIA was the euro overnight rate before it was replaced by €STR (2022). The question is in its original wording.",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "Above the deposit rate the demand curve for reserves slopes downward: a lower overnight rate means a lower opportunity cost of holding excess reserves, so banks demand more reserves. At the deposit rate the curve becomes flat.",
          "source": "Lecture 10, 'Demand for reserves'",
          "origin": "Old-exam pool #201"
        },
        {
          "num": "P-203",
          "qid": "P-203",
          "stem": "Using Taylor’s rule, when the equilibrium real interest rate is 2 percent, real GDP is at 3 percent below the potential output level, the target inflation rate is 2 percent, and the actual inflation rate is 3 percent, the nominal interest rate target set by the central bank should be",
          "options": [
            {
              "l": "a",
              "t": "7 percent."
            },
            {
              "l": "b",
              "t": "6 percent."
            },
            {
              "l": "c",
              "t": "4 percent."
            },
            {
              "l": "d",
              "t": "None of the answers 1, 2 and 3 is correct."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "calc",
          "fmt": "single",
          "explanation": "The output gap is −3 %. i = 3 + 2 + 0.5 × (3 − 2) + 0.5 × (−3) = 4 %.",
          "source": "Lecture 10, 'Tactics: the Taylor rule'",
          "origin": "Old-exam pool #203"
        },
        {
          "num": "P-244",
          "qid": "P-244",
          "stem": "Open Market Operations (OMOs) have several advantages. However, one of the below statements does certainly not contain an advantage of OMOs.",
          "options": [
            {
              "l": "a",
              "t": "OMOs are precise."
            },
            {
              "l": "b",
              "t": "OMOs are certain to increase the non-borrowed reserves."
            },
            {
              "l": "c",
              "t": "OMOs are easily reversed."
            },
            {
              "l": "d",
              "t": "OMOs are quickly implemented."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l10",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The advantages of OMOs are that the central bank has full control over them, they are flexible and precise, easily reversed and quickly implemented. (b) is not an advantage and not even true: open market sales reduce non-borrowed reserves, and a purchase from a non-bank that keeps the cash raises currency rather than reserves.",
          "source": "Lecture 10, 'Open market operations'; Lecture 9",
          "origin": "Old-exam pool #244"
        }
      ]
    },
    {
      "id": "t_l11",
      "label": "L11 – Regulation",
      "source": "Old final exams + question pool, no duplicates",
      "questions": [
        {
          "num": "RQ-18",
          "qid": "RQ-18",
          "stem": "The so-called “inaction bias” in macroprudential regulation relates to",
          "options": [
            {
              "l": "a",
              "t": "the danger that the €STR is increased in small steps that restrict bank lending in a move to strengthen macroprudential regulation."
            },
            {
              "l": "b",
              "t": "the fact that loan-to-value ratios (one of the instruments of macroprudential regulation) tend to be changed in order to keep mortgage financing at its so-called “inaction point”."
            },
            {
              "l": "c",
              "t": "the danger that increased Basel minimum capital requirements stimulate banks to restricting lending."
            },
            {
              "l": "d",
              "t": "the fact that the costs of activating macroprudential instruments arise in the short term and are visible, whereas the benefits are longer-term and less obvious."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Inaction bias: activating a macroprudential instrument has costs that are immediate and visible (e.g. lower growth), while the benefits (a crisis that does not happen) are long-term and uncertain. That is why macroprudential regulators should be independent, which is why central banks take on this role.",
          "source": "Lecture 11, macroprudential regulation; Veestraeten (2019)",
          "origin": "Representative questions Q18 · also in: Old-exam pool #142"
        },
        {
          "num": "F25-1",
          "qid": "F25-1",
          "stem": "Financial markets and financial intermediaries are regulated for various reasons. Which of the following four features is not one of the features of regulation of financial intermediaries?",
          "options": [
            {
              "l": "a",
              "t": "Ensuring that banks hold sufficiently large reserves."
            },
            {
              "l": "b",
              "t": "Requiring corporations to write and publish a prospectus prior to issuing stocks."
            },
            {
              "l": "c",
              "t": "Ensuring that pension funds only invest in “good quality” assets."
            },
            {
              "l": "d",
              "t": "Requiring banks to quickly increase their capital when the ratio of capital to risk-weighted assets falls below the levels that are determined within the Basel Accords."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "A prospectus requirement regulates financial markets (issuers of stocks and bonds, information for investors), not financial intermediaries. Reserve requirements, asset restrictions for pension funds and prompt corrective action on capital are all regulation of intermediaries.",
          "source": "Lecture 11, 'Categories of financial regulation'",
          "origin": "Final exam Oct 2025 Q1 · also in: Old-exam pool #143"
        },
        {
          "num": "F25-2",
          "qid": "F25-2",
          "stem": "Which of the following statements on the Basel Agreements is correct?",
          "options": [
            {
              "l": "a",
              "t": "The Basel Agreements were introduced as an answer to the collapse of U.S.- American banks in the 1930s."
            },
            {
              "l": "b",
              "t": "Basel I required banks to keep a ratio of capital to risk-weighted liabilities of at least 8 percent."
            },
            {
              "l": "c",
              "t": "The Standardised Approach within Basel II required banks to treat all loans as equally risky since the earlier more differentiated system created a lack of transparency."
            },
            {
              "l": "d",
              "t": "The second pillar in the Basel II agreement required banks to submit their risk assessment to a supervisor."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Pillar II is the supervisory review: the bank assesses its own capital adequacy and supervisors check it. (a) Basel I was prompted by the Latin-American debt crisis of the 1980s; (b) the ratio is capital to risk-weighted assets; (c) the standardised approach uses more detailed risk categories based on credit ratings.",
          "source": "Lecture 11, Basel I and Basel II",
          "origin": "Final exam Oct 2025 Q2 · also in: Old-exam pool #144"
        },
        {
          "num": "F25-3",
          "qid": "F25-3",
          "stem": "The paper on macroprudential policy in the course materials argued that macroprudential policy has to address the two dimensions of systemic risk. These two dimensions are the _________ risk and the ________ risk.",
          "options": [
            {
              "l": "a",
              "t": "cyclical or cross-sectional; time-varying or structural"
            },
            {
              "l": "b",
              "t": "countercyclical; time-inconsistency"
            },
            {
              "l": "c",
              "t": "cyclical or time-varying; cross-sectional or structural"
            },
            {
              "l": "d",
              "t": "undervaluation; composition"
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "respectively",
          "explanation": "Systemic risk has a cyclical (time-varying) dimension, how much risk builds up over the financial cycle, and a cross-sectional (structural) dimension, how risk is distributed and interconnected across institutions at a given moment.",
          "source": "Veestraeten (2019), macroprudential policy reading, section 2",
          "origin": "Final exam Oct 2025 Q3 · also in: Old-exam pool #145"
        },
        {
          "num": "J23-10",
          "qid": "J23-10",
          "stem": "The Swedish Bank Ruttör holds SEK 400 million in required reserves and SEK 50 million in excess reserves. The total amount of deposits of the Bank Ruttör is at SEK 2,000 million and the required reserve ratio amounts to 20 percent. Its capital is at SEK 300 million and this amounts to 10 percent of its risk-weighted assets. What is the amount of risk-weighted assets that this bank holds?",
          "options": [
            {
              "l": "a",
              "t": "SEK 2,550 million."
            },
            {
              "l": "b",
              "t": "SEK 3,000 million."
            },
            {
              "l": "c",
              "t": "SEK 3,450 million."
            },
            {
              "l": "d",
              "t": "This question cannot be answered without further information on the amount of government bonds that the Bank Ruttör holds."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "calc",
          "fmt": "single",
          "explanation": "Capital = 10 % of RWA, so RWA = 300 / 0.10 = SEK 3,000 million. The reserve and deposit figures are distractors.",
          "source": "Lecture 11, Basel capital ratio C / RWA",
          "origin": "Exam Jan 2023 Q10 · also in: Old-exam pool #258"
        },
        {
          "num": "J23-11",
          "qid": "J23-11",
          "stem": "Which of the following four objectives is not amongst the intermediate objectives of macroprudential regulation?",
          "options": [
            {
              "l": "a",
              "t": "Reducing excessive credit growth and leverage."
            },
            {
              "l": "b",
              "t": "Preventing excessive maturity mismatch and market illiquidity."
            },
            {
              "l": "c",
              "t": "Reducing direct and indirect exposure concentrations."
            },
            {
              "l": "d",
              "t": "Mitigating the Basel agreements’ countercyclical effects."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ESRB's four intermediate objectives are to prevent (1) excessive credit growth and leverage, (2) excessive maturity mismatch and market illiquidity, (3) direct and indirect exposure concentrations, and (4) misaligned incentives and moral hazard. 'Mitigating the Basel agreements' countercyclical effects' is not one of them, and the problem with Basel II is procyclicality anyway.",
          "source": "Veestraeten (2019), section 3 'The intermediate objectives of macroprudential policy'",
          "origin": "Exam Jan 2023 Q11 · also in: Old-exam pool #259"
        },
        {
          "num": "R21-9",
          "qid": "R21-9",
          "stem": "Actions that are appropriate at the level of the individual bank may end up being destabilising for the financial system as a whole. This notion is referred to as",
          "options": [
            {
              "l": "a",
              "t": "the time-inconsistency problem."
            },
            {
              "l": "b",
              "t": "the fallacy of composition."
            },
            {
              "l": "c",
              "t": "the identification problem."
            },
            {
              "l": "d",
              "t": "none of the other answers is correct."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Fallacy of composition: what is rational for one bank (e.g. lending heavily to a booming sector, or using securitisation) becomes destabilising when every bank does it. This is the core argument for macroprudential, not just microprudential, regulation.",
          "source": "Lecture 11, macroprudential regulation of banks",
          "origin": "Resit exam 2021 Q9 · also in: Old-exam pool #267"
        },
        {
          "num": "F20-1",
          "qid": "F20-1",
          "stem": "Regarding the selection of instruments of macroprudential policy, four requirements are listed. Which of the following is not amongst the requirements?",
          "options": [
            {
              "l": "a",
              "t": "The instrument must be effective in preventing the build-up of systemic risk, i.e. must be procyclical."
            },
            {
              "l": "b",
              "t": "The instrument must offer limited opportunities for arbitrage."
            },
            {
              "l": "c",
              "t": "The instrument must be aimed at the roots, not only at the symptoms of systemic risk."
            },
            {
              "l": "d",
              "t": "The instrument must be distortionary to the lowest possible extent to the financial system and the economy."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Instruments must be effective against the build-up of systemic risk, which means countercyclical, not procyclical. Limited arbitrage, targeting roots rather than symptoms, and minimal distortion are all on the lecture's list.",
          "source": "Lecture 11, 'Useful macroprudential instruments must ...'",
          "origin": "Final exam 2020 Q1"
        },
        {
          "num": "P-11",
          "qid": "P-11",
          "stem": "The European Systemic Risk Board (ESRB) states that it allows for “guided discretion”. What is meant by “guided discretion”?",
          "options": [
            {
              "l": "a",
              "t": "In order to deal with unforeseeable positive and negative shocks, the ESRB proposes a mixture of rules- and discretion-based methods."
            },
            {
              "l": "b",
              "t": "An optimal degree of unpredictability in the actions of the ESRB ensures that commercial banks act in a more careful manner."
            },
            {
              "l": "c",
              "t": "In order to stimulate the economy, the ESRB can increase the countercyclical liquidity buffers."
            },
            {
              "l": "d",
              "t": "The time-inconsistency problem in microprudential regulation can be reduced by letting the ESRB follow a clear behaviour rule."
            }
          ],
          "correct": [
            "a"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The reading notes that pure rules ignore unforeseeable shocks and new products, while pure discretion suffers from the inaction bias. The ESRB therefore proposes a mixture of rules and discretion and calls it 'guided discretion'.",
          "source": "Veestraeten (2019), section 4.3 'Policy implementation'",
          "origin": "Old-exam pool #11"
        },
        {
          "num": "P-51",
          "qid": "P-51",
          "stem": "Financial markets and financial intermediaries are regulated for various reasons. Which of the following four features is one of the features of the regulation of financial intermediaries?",
          "options": [
            {
              "l": "a",
              "t": "requiring banks to quickly decrease their capital when their ratio of capital to risk-weighted assets rises above the levels that are determined within the Basel Accords."
            },
            {
              "l": "b",
              "t": "requiring pension funds to invest in so-called junk bonds."
            },
            {
              "l": "c",
              "t": "reducing the amount of deposits that are guaranteed within the deposit-insurance system."
            },
            {
              "l": "d",
              "t": "allowing commercial banks with liquidity problems to call upon the central bank in the latter’s role as lender of last resort (LOLR)."
            }
          ],
          "correct": [
            "d"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The lender of last resort is one of the government safety nets, along with deposit insurance. The other three state the opposite of real regulation.",
          "source": "Lecture 11, 'Categories of financial regulation'",
          "origin": "Old-exam pool #51"
        },
        {
          "num": "P-52",
          "qid": "P-52",
          "stem": "When the capital of a bank falls below the minimum capital requirements of the Basel II agreement, the following action cannot bring it back towards fulfilling these requirements:",
          "options": [
            {
              "l": "a",
              "t": "Decreasing dividends."
            },
            {
              "l": "b",
              "t": "Decreasing capital."
            },
            {
              "l": "c",
              "t": "Selling government bonds that it owns and putting the proceeds into the reserves."
            },
            {
              "l": "d",
              "t": "Selling loans and putting the proceeds into the reserves."
            }
          ],
          "correct": [
            "b"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "Reducing capital lowers C / RWA even further. Cutting dividends raises C through retained earnings. Selling government bonds or loans and holding the proceeds as reserves (risk weight 0 %) lowers RWA.",
          "source": "Lecture 11, 'The danger of pro-cyclicality ...' (ways to raise C/RWA)",
          "origin": "Old-exam pool #52"
        },
        {
          "num": "P-53",
          "qid": "P-53",
          "stem": "Which of the following four objectives is not amongst the intermediate objectives of macroprudential regulation?",
          "options": [
            {
              "l": "a",
              "t": "Reducing excessive credit growth and leverage."
            },
            {
              "l": "b",
              "t": "Preventing excessive maturity mismatch and market illiquidity."
            },
            {
              "l": "c",
              "t": "Increasing direct and indirect exposure concentrations."
            },
            {
              "l": "d",
              "t": "Preventing misaligned incentives and moral-hazard incentives."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The ESRB's objective is to prevent (reduce) direct and indirect exposure concentrations, not increase them. The other three are intermediate objectives.",
          "source": "Veestraeten (2019), section 3",
          "origin": "Old-exam pool #53"
        },
        {
          "num": "P-253",
          "qid": "P-253",
          "stem": "The following disadvantage is not listed amongst the main disadvantages/dangers of regulation of financial intermediaries:",
          "options": [
            {
              "l": "a",
              "t": "moral hazard."
            },
            {
              "l": "b",
              "t": "high cost of compliance."
            },
            {
              "l": "c",
              "t": "adverse selection."
            },
            {
              "l": "d",
              "t": "regulatory capture."
            }
          ],
          "correct": [
            "c"
          ],
          "note": "",
          "topic": "t_l11",
          "kind": "concept",
          "fmt": "single",
          "explanation": "The lecture lists three dangers of regulation: moral hazard (safety nets), costs of compliance, and regulatory capture. Adverse selection is a problem that regulation tries to reduce, not a danger it creates.",
          "source": "Lecture 11, 'Main disadvantages/dangers of regulation'",
          "origin": "Old-exam pool #253"
        }
      ]
    }
  ]
};

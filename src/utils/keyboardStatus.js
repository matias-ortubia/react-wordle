const STATUS_PRIORITY = { correct: 3, almost: 2, notInWord: 1 };

const computeLetterStatuses = (sentWords) => {
    const statuses = {};

    sentWords.forEach(({ word, result }) => {
        word.toUpperCase().split('').forEach((letter, i) => {
            const status = result[i];
            const currentBest = statuses[letter];

            if (!currentBest || STATUS_PRIORITY[status] > STATUS_PRIORITY[currentBest]) {
                statuses[letter] = status;
            }
        });
    });

    return statuses;
};

export { computeLetterStatuses };

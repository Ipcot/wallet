import { nanoid } from 'nanoid';
import { CardConteiner, CardBox, TypographyCard, Span } from '../index.styled';

export const СardRender = ({ data }) => {
  const card =
    data &&
    data.map(({ isIncome, category, comment, sum, balance, date }) => {
      console.log('type: ', isIncome);
      return (
        <CardConteiner sx={{ minWidth: 280 }} typeTr={isIncome ? '+' : '-'}>
          <CardBox key={nanoid()}>
            <TypographyCard>
              Date <Span>{date.slice(0, 10)}</Span>
            </TypographyCard>
            <TypographyCard>
              Type <Span>{isIncome ? 'Income' : 'Expense'}</Span>
            </TypographyCard>
            <TypographyCard>
              Category <Span>{category}</Span>
            </TypographyCard>
            <TypographyCard>
              Comment <Span>{comment}</Span>
            </TypographyCard>
            <TypographyCard>
              Sum <Span typeTr={isIncome ? '+' : '-'}>{sum}</Span>
            </TypographyCard>
            <TypographyCard>
              Balance <Span>{balance}</Span>
            </TypographyCard>
          </CardBox>
        </CardConteiner>
      );
    });
  return card;
};

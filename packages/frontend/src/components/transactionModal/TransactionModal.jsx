import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconTextField } from './iconTextField/IconTextField';
import categories from '../../constants/operation.json';
import transactionsOperations from '../../store/transactions/transactionsOperations';

import {
  Heading,
  CustomSwitch,
  CloseButton,
  CloseIcon,
  IncomeLabel,
  ExpenseLabel,
  CategorySelect,
  CategoryPlaceholder,
  CategoryItem,
  TransactionBox,
  DateTimePicker,
  DownArrowStyled,
  CalendarSVGStyled,
  SumField,
  Comment,
} from './TransactionModal.styled';

import { Button, FormGroup, Stack } from '@mui/material';

const TransactionModal = ({ opened, closeModal }) => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      isExpense: false,
      category: '',
      sum: '',
      transactionDate: new Date(),
      comment: '',
    },
  });

  const checked = watch('isExpense');
  const dispatch = useDispatch();

  const onSubmit = data => {
    const isIncome = !data.isExpense;
    const { transactionDate: date, sum, comment, category } = data;
    dispatch(
      transactionsOperations.addTransaction({
        isIncome,
        date,
        sum: Number(sum),
        comment,
        category: isIncome ? 'Main' : category,
      })
    );
    closeModal();
    reset();
  };

  const matchesTablet = useMediaQuery('(min-width:768px)');

  const rowStackDirection = matchesTablet ? 'row' : 'column';

  return (
    <>
      <TransactionBox>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>

        <Heading id="modal-modal-title" variant="h6" component="h2" sx={{}}>
          Add transaction
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup display="flex" sx={{ gap: '40px', mb: '40px' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: 'flex', justifyContent: 'center' }}
              alignItems="center"
            >
              <IncomeLabel checked={checked}>Income</IncomeLabel>

              <Controller
                name="isExpense"
                control={control}
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                  <CustomSwitch
                    sx={{ height: '100%' }}
                    name="isExpense"
                    value={value}
                    onChange={(event, val) => {
                      if (!val) {
                        setValue(`category`, '');
                      }
                      return onChange(val);
                    }}
                    defaultChecked={false}
                  />
                )}
              />

              <ExpenseLabel checked={checked}>Expense</ExpenseLabel>
            </Stack>

            <Controller
              control={control}
              name={'category'}
              render={({ field: { onChange, value } }) => (
                <CategorySelect
                  {...register('category', {
                    required: checked ? true : false,
                  })}
                  error={!!errors?.category}
                  helpertext={errors?.category && errors.category.message}
                  inputProps={{
                    MenuProps: {
                      MenuListProps: {
                        sx: {
                          background: 'rgba(255, 255, 255, 0.7)',
                          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
                          backdropFilter: 'blur(2px)',
                        },
                      },
                      PaperProps: {
                        sx: {
                          background: 'transparent',
                          '& .MuiMenuItem-root:not(:last-child)': {
                            marginBottom: '10px',
                          },
                          '& .MuiMenuItem-root:hover': {
                            backgroundColor: 'unset',
                            color: '#FF6596',
                          },
                        },
                      },
                    },
                  }}
                  IconComponent={DownArrowStyled}
                  variant="standard"
                  name="category"
                  checked={checked}
                  displayEmpty
                  onChange={onChange}
                  value={value}
                  renderValue={
                    value !== ''
                      ? undefined
                      : () => (
                          <CategoryPlaceholder>
                            Select a category
                          </CategoryPlaceholder>
                        )
                  }
                >
                  {categories.map(category => {
                    return (
                      <CategoryItem value={category.name} key={category.id}>
                        {category.name}
                      </CategoryItem>
                    );
                  })}
                </CategorySelect>
              )}
            />

            <Stack gap={'40px'} direction={rowStackDirection}>
              <Controller
                rules={{
                  required: true,
                  pattern: /^(?:[1-9]\d*|0(?!(?:\.0+)?$))?(?:\.\d\d)?$/,
                }}
                control={control}
                name={'sum'}
                render={({ field: { onChange, value } }) => (
                  <SumField
                    margin="dense"
                    placeholder="0.00"
                    variant="standard"
                    type="number"
                    step="any"
                    onChange={onChange}
                    value={value}
                    error={!!errors?.sum}
                    helpertext={errors?.sum && errors.sum.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={'transactionDate'}
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    onChange={onChange}
                    value={value}
                    viewMode="days"
                    timeFormat={false}
                    closeOnSelect
                    dateFormat="DD.MM.YYYY"
                    initialValue={new Date()}
                    renderInput={props => (
                      <IconTextField
                        {...props}
                        variant="standard"
                        sx={{
                          width: '100%',
                          height: '32px',
                          '& .MuiInput-root': {
                            paddingLeft: '20px',
                            fontFamily: 'CirceRegular, sans-serif',
                            fontSize: '18px',
                            lineHeight: '1.5',
                          },
                        }}
                        iconEnd={<CalendarSVGStyled />}
                      />
                    )}
                  />
                )}
              />
            </Stack>

            <Controller
              control={control}
              name={'comment'}
              render={({ field: { onChange, value } }) => (
                <Comment
                  minRows={matchesTablet ? '1' : '3'}
                  multiline={true}
                  placeholder="Comment"
                  variant="standard"
                  type="text"
                  name="comment"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </FormGroup>

          <Stack direction="column" spacing={'20px'} alignItems="center">
            <Button
              variant="contained"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Add
            </Button>
            <Button color="secondary" variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
          </Stack>
        </form>
      </TransactionBox>
    </>
  );
};

export default TransactionModal;

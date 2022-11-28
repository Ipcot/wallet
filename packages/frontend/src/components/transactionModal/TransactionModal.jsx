import { useForm, Controller } from 'react-hook-form';
import 'react-datetime/css/react-datetime.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconTextField } from './iconTextField/IconTextField';

import {
  ModalTransaction,
  Heading,
  CustomSwitch,
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

import { Button, FormGroup, Stack, Fade } from '@mui/material';

const TransactionModal = props => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors, isDirty, isValid,  },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      transactionType: true,
      category: '',
      sum: '',
      transactionDate: new Date(),
      comment: '',
    },
  });

  const checked = watch('transactionType');

  const onSubmit = data => {
    props.close();
    reset();
  };

  const handleClose = () => {
    props.close();
    reset();
  };


  const matchesTablet = useMediaQuery('(min-width:768px)');

  const rowStackDirection = matchesTablet ? 'row' : 'column';

  return (
    <div>
      <ModalTransaction
        open={props.show}
        onClose={handleClose}
        aria-labelledby="modal-add-transaction"
        closeAfterTransition
        hideBackdrop={matchesTablet ? false : true}
      >
        <Fade in={props.show}>
          <TransactionBox>
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
                    name="transactionType"
                    control={control}
                    defaultValue={true}
                    render={({ field: { onChange, value } }) => (
                      <CustomSwitch
                        sx={{ height: '100%' }}
                        name="transactionType"
                        value={value}
                        onChange={(event, val) => {
                          if (!val) {
                            setValue(`category`, '');
                          }
                          return onChange(val);
                        }}
                        defaultChecked
                      />
                    )}
                  />

                  <ExpenseLabel checked={checked}>Expense</ExpenseLabel>
                </Stack>

                <Controller
                  control={control}
                  name={'category'}
                  render={({ field: { onChange, onBlur, value } }) => (
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
                              backdropFilter: 'blur(25px)',
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
                      <CategoryItem value="Main">Main</CategoryItem>
                      <CategoryItem value="Food">Food</CategoryItem>
                      <CategoryItem value="Auto">Auto</CategoryItem>
                      <CategoryItem value="Development">
                        Development
                      </CategoryItem>
                      <CategoryItem value="Education">Education</CategoryItem>
                      <CategoryItem value="Children">Children</CategoryItem>
                      <CategoryItem value="House">House</CategoryItem>
                      <CategoryItem value="Reset">Rest</CategoryItem>
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
                    render={({ field: { onChange, onBlur, value } }) => (
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
                    render={({ field: { onChange, onBlur, value } }) => (
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
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Comment
                      minRows="3"
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
                <Button variant="contained" type="submit" disabled={ !isDirty || !isValid }>
                  Add
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Stack>
            </form>
          </TransactionBox>
        </Fade>
      </ModalTransaction>
    </div>
  );
};

export default TransactionModal;

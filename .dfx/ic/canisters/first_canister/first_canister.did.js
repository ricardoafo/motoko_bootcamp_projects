export const idlFactory = ({ IDL }) => {
  const StudentProfile = IDL.Record({
    'graduate' : IDL.Bool,
    'name' : IDL.Text,
    'team' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'ok' : StudentProfile, 'err' : IDL.Text });
  const TestError = IDL.Variant({
    'UnexpectedValue' : IDL.Text,
    'UnexpectedError' : IDL.Text,
  });
  const TestResult = IDL.Variant({ 'ok' : IDL.Null, 'err' : TestError });
  return IDL.Service({
    'addMyProfile' : IDL.Func([StudentProfile], [Result], []),
    'deleteMyProfile' : IDL.Func([IDL.Principal], [Result], []),
    'seeAProfile' : IDL.Func([IDL.Principal], [Result_1], ['query']),
    'test' : IDL.Func([IDL.Principal], [TestResult], []),
    'updateMyProfile' : IDL.Func(
        [IDL.Principal, StudentProfile],
        [Result_1],
        [],
      ),
    'verifyOwnership' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        [],
      ),
    'verifyWork' : IDL.Func([IDL.Principal, IDL.Principal], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };

debugger;
const OtherComponent = React.lazy(() => import('./OtherComponent'));

const MyLazy = () => {
  return (
        <React.Suspense fallback={<h1>Still Loading…</h1>}>
            <OtherComponent />
        </React.Suspense>
  );
}

export default MyLazy;
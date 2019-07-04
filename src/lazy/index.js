const OtherComponent = React.lazy(() => import('./OtherComponent'));

const MyLazy = () => {
  return (
    <div>
         <div>我是初始就显示的</div>
        <React.Suspense fallback={<h1>Still Loading…</h1>}>
           
            <OtherComponent />
        </React.Suspense>
        
        
    </div>
  );
}

export default MyLazy;
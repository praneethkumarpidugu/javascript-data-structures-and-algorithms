function subsequence(s1, s2, s1Idx=0,s2Idx=0)
{
    const results = [...s1].map(s1Char => {
        const s2Idx = s2.findIndex(s1Char)    
        console.log(s2Idx);
        
    })
    
    
}
subsequence('ABSDSDJSD', 'AQWQWQWSQWQWS')

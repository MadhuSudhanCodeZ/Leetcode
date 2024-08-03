class Solution:
    def countSeniors(self, details: List[str]) -> int:
        res=0
        for i in details:
            s=i[11]+i[12]
            if int(s) >60:
                res+=1
        return res
